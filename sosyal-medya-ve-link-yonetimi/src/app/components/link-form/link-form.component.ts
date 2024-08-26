import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { SocialMediaService } from '../../services/api/social-media.service';
import {SocialMediaLink} from "../../models/social-media-link.model";
@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css']
})
export class LinkFormComponent {
  @Input() links: any[] = [];
  @Output() editRequest = new EventEmitter<any>();
  visitedLinks: any[] = [];
  constructor(private socialMediaService: SocialMediaService, private cdr: ChangeDetectorRef) { }
  editLink(link: SocialMediaLink): void {
    this.editRequest.emit(link); // Güncelleme talebini ana bileşene ilet
  }
  deleteLink(id: string): void {
    const confirmation = confirm('Bu işlemi onaylıyor musunuz? Bu işlem geri alınamaz.');
    if(confirmation){
      this.socialMediaService.deleteLink(id).subscribe(
        () => {
          this.links = this.links.filter(link => link._id !== id);
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error deleting social media link:', error);
        }
      );
    }
  }
  visitLink(link: SocialMediaLink): void {
    this.socialMediaService.recordVisit(link);
  }
}
