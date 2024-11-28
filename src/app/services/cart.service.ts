import { Injectable } from '@angular/core';
import { BurgerItem } from '../modules/dashboard/dashboard.component';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: BurgerItem[] = [];

  constructor() {
    // Load cart items from localStorage on initialization
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItems = storedCartItems;
  }

  // Add item to cart
  addToCart(item: BurgerItem): void {
    this.cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  // Remove item from cart
  removeFromCart(item: BurgerItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.name !== item.name);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  // Get cart items
  getCartItems(): BurgerItem[] {
    return this.cartItems;
  }

  // Get total items in the cart
  getTotalItems(): number {
    return this.cartItems.length;
  }

  // Get total price of items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
