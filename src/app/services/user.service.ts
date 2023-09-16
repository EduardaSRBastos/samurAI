import { Injectable } from '@angular/core';
import { User } from '../User';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router  } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private apiUrl = 'https://localhost:7104/api';

  constructor(private router: Router, private http: HttpClient) {}

  /* get loggedIn(): Observable<boolean> {
     return this.loggedInSubject.asObservable();
  } */

  register(user: User) : Observable<User>{
    localStorage.setItem('username', user.username);
    localStorage.setItem('email', user.email);

    this.router.navigate(['/home']);
    setTimeout(() => {
      window.location.reload();
    }, 100);

    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  login(user: User) : Observable<any>{
    //this.loggedInSubject.next(true);
    localStorage.setItem('username', user.username);
    localStorage.setItem('email', user.email);

    this.router.navigate(['/home']);
    setTimeout(() => {
      window.location.reload();
    }, 100);

    return this.http.post<any>(`${this.apiUrl}/login`, user); 
  }

  logout() : Observable<any>{
    localStorage.clear();

    this.router.navigate(['/']);
    window.location.reload();

    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }
}
