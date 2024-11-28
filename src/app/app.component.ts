import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showHeader = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to the login status
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.showHeader = isLoggedIn;
    });
  }
}
