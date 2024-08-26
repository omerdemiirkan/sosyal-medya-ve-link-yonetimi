import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { SocialMediaService } from '../../services/api/social-media.service';
import {SocialMediaLink} from "../../models/social-media-link.model";


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnChanges, AfterViewInit {
  @Input() link: SocialMediaLink | null = null;
  @Output() linkUpdated = new EventEmitter<void>(); // Güncelleme tamamlandığında ana bileşene bildirim
  @Output() updateCancelled = new EventEmitter<void>(); // Güncelleme iptal edildiğinde tetiklenecek olay

  private modalInstance: any; // Bootstrap modal instance
  constructor(private socialMediaService: SocialMediaService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['link'] && this.link) {
      if (this.modalInstance) {
        this.modalInstance.show();
      }
    }
  }
  ngAfterViewInit(): void {
    const modalElement = document.getElementById('updateModal');
    if (modalElement) {
      this.modalInstance = new (window as any).bootstrap.Modal(modalElement);
    }
  }
  updateLink(): void {
    if (this.link && this.link._id && this.link.name && this.link.url && this.link.desc) {
      this.socialMediaService.updateLink(this.link).subscribe(
        () => {
          this.linkUpdated.emit(); // Güncelleme tamamlandığında ana bileşene bildirim gönder
          this.closeModal();
        },
        (error) => {
          console.error('Error updating social media link:', error);
        }
      );
    } else {
      console.error('Link ID or other fields are missing:', this.link);
    }
  }


  onCancel(): void {
    this.updateCancelled.emit(); // Güncelleme iptal edildi
    this.closeModal();
  }
  closeModal(): void {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }
}
