import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { LoginForm } from '../../models/login-form.model'; // LoginForm arayüzünü içe aktarın

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: LoginForm = {
    username: '',
    password: ''
  };
  error: string = '';
  constructor(private authService: AuthService, private router: Router) { }
  login(): void {
    // `loginForm` nesnesini `AuthService`'in `login` fonksiyonuna iletin
    this.authService.login(this.loginForm).subscribe(success => {
      if (success) {
        this.router.navigate(['/main-layout']);
      } else {
        this.error = 'Invalid username or password';
      }
    });
  }
}
