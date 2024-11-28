import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  userName: string = 'John Doe'; // Replace with real user data
  userImage: string = './assets/office-man.png'; // Replace with real user image

  constructor(private cartService: CartService , private route : Router) {}

  ngOnInit(): void {
    this.cartItemCount = this.cartService.getTotalItems();
  }
  dashboard(){
    this.route.navigate(['/dashboard']);  // Navigate to tasks page on success

  }

  goToCart(): void {
    // Navigate to cart component
    console.log('Go to cart');
    this.route.navigate(['/cart']);  // Navigate to tasks page on success

  }

  logout(): void {
    // Clear user data and redirect to login
    localStorage.removeItem('username');
    // Navigate to login page (example)
  }
}
