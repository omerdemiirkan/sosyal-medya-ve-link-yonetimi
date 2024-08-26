import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { RegisterModel } from '../../models/register.model';
import { User } from '../../models/user.model';
import {LoginForm} from "../../models/login-form.model";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) { }
  register(user: RegisterModel): Observable<boolean> {
    return this.http.post<RegisterModel>(this.apiUrl, user).pipe(
      map(response => {
        return response && response._id ? true : false;
      })
    );
  }
  login(loginForm: LoginForm): Observable<boolean> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      map(response => {
        const user = response.users.find(u => u.username === loginForm.username && u.password === loginForm.password);
        if (user) {
          localStorage.setItem('authToken', 'fake-token'); // Simüle bir token
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(false);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
