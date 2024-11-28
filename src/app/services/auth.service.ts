import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('username'));
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login(username: string) {
    localStorage.setItem('username', username);
    this.isLoggedInSubject.next(true); // Notify subscribers
  }

  logout() {
    localStorage.removeItem('username');
    this.isLoggedInSubject.next(false); // Notify subscribers
  }
}
