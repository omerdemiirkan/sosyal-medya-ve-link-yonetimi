import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    username: '',
    email: '',
    password: ''
  };
  error: string = '';
  constructor(private authService: AuthService, private router: Router) { }
  register(): void {
    this.authService.register(this.user).subscribe(success => {
      if (success) {
        this.router.navigate(['/login']);
      } else {
        this.error = 'Registration failed';
      }
    });
  }
}
