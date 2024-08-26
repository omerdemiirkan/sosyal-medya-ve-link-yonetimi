import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import {SocialMediaLink} from "../../models/social-media-link.model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit {
  isVisible = false;
  link: SocialMediaLink = {
    name: '',
    url: '',
    desc: '',

  };
  @Output() linkAdded = new EventEmitter<SocialMediaLink>();
  ngAfterViewInit(): void {
    const modalElement = document.getElementById('socialMediaModal');
    if (modalElement) {
      new (window as any).bootstrap.Modal(modalElement, {
        backdrop: 'static',
        keyboard: true
      });
    }
  }
  onSubmit(): void {
    if (this.link.name && this.link.url && this.link.desc) {
      this.linkAdded.emit(this.link); // Olayı tetikleyin
      this.link = { name: '', url: '', desc: '', }; // Formu sıfırlayın
      this.close();
    }
  }
  open(): void {
    this.isVisible = true;
    setTimeout(() => {
      const modalElement = document.getElementById('socialMediaModal');
      if (modalElement) {
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.show();
      }
    }, 0); // Zaman aşımı ile modal'ı göstermek
  }
  close(): void {
    this.isVisible = false;
    const modalElement = document.getElementById('socialMediaModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.hide();
    }
    setTimeout(() => {
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
      document.body.classList.remove('modal-open');
    }, 300);
  }
}
