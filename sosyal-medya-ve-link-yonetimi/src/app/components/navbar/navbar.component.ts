import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}
  logout() {
    const confirmation = confirm('Çıkış işlemi onaylıyor musunuz?');
    if(confirmation){
      ['socialMediaLinks', 'visitedLinks','authToken'].forEach(key => localStorage.removeItem(key));
      this.router.navigate(['/login']);
    }

  }
}
