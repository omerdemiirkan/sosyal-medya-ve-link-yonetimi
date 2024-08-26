import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialMediaService } from '../../services/api/social-media.service';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { ModalComponent } from '../modal/modal.component';
import {SocialMediaLink} from "../../models/social-media-link.model";


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  links: SocialMediaLink[] = [];
  selectedLink: SocialMediaLink | null = null;
  filteredLinks: SocialMediaLink[] = [];
  currentPage = 1;
  itemsPerPage = 4;
  pagedLinks: SocialMediaLink[] = [];
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild(UpdateFormComponent) updateForm!: UpdateFormComponent;
  constructor(private socialMediaService: SocialMediaService) {}
  ngOnInit(): void {
    this.socialMediaService.links$.subscribe(
      (data: SocialMediaLink[]) => {
        this.links = data;
        this.filteredLinks = data;
        this.updatePagedLinks();
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  updatePagedLinks(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedLinks = this.filteredLinks.slice(start, end);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePagedLinks();
  }

  onItemsPerPageChange(itemsPerPage: number): void {
    this.itemsPerPage = +itemsPerPage;
    this.currentPage = 1;
    this.updatePagedLinks();
  }
  openModal(): void {
    if (this.modal) {
      this.modal.open();
    } else {
      console.error('Modal is not initialized');
    }
  }
  openUpdateForm(link: SocialMediaLink): void {
    this.selectedLink = { ...link }; // Seçilen linki güncelle
    if (this.updateForm) {
      this.updateForm.link = this.selectedLink; // Güncellenen linki form bileşenine ata
    }
  }
  onLinkAdded(link: Omit<SocialMediaLink, 'id'>): void {
    this.socialMediaService.addLink(link).subscribe(() => {
      this.socialMediaService.getLinks().subscribe(data => {
        this.links = data;
        this.filteredLinks = data;
        this.updatePagedLinks();
      });
    });
  }
  onLinkUpdated(): void {
    this.selectedLink = null; // Güncelleme tamamlandığında seçilen linki sıfırla
  }
  onSearchTermChange(searchTerm: string): void {
    if (searchTerm) {
      this.filteredLinks = this.links.filter(link =>
        link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredLinks = [...this.links];
    }
    this.currentPage = 1;
    this.updatePagedLinks();
  }
}
