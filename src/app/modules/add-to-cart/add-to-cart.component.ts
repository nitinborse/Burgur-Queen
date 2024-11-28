import { Component, OnInit } from '@angular/core';
import { BurgerItem } from '../dashboard/dashboard.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  cartItems: BurgerItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeItemFromCart(item: BurgerItem): void {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems(); // Update the items list
    this.totalPrice = this.cartService.getTotalPrice(); // Update the total
    window.location.reload()
  }
  placeOrder(): void {
    const confirmed = confirm('Do you want to place the order?'); // Confirmation popup
    if (confirmed) {
      console.log('Selected Items:', this.cartItems); // Log selected items
      alert('Order placed successfully!'); // Optional success message
    }
  }
}