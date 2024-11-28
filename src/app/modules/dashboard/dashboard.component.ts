import { Component, OnInit } from '@angular/core';
export interface BurgerItem {
  name: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  // searchQuery: string = '';

  // // Dummy JSON for Popular Items
  // popularItems = [
  //   { name: 'Classic Burger', price: 150, image: './assets/pexels-myfoodie-2702674.jpg' },
  //   { name: 'Cheese Burst Burger', price: 200, image: './assets/pexels-horizon-content-2100060-3738730.jpg' },
  //   { name: 'Spicy Chicken Burger', price: 250, image: './assets/pexels-narclique-660282.jpg' },
  // ];

  // // Dummy JSON for New Arrivals
  // newArrivalItems = [
  //   { name: 'BBQ Burger', price: 300, image: './assets/pexels-adrian-dorobantu-989175-2089717.jpg' },
  //   { name: 'Veggie Delight Burger', price: 180, image: './assets/pexels-daniel-reche-718241-3616956.jpg' },
  //   { name: 'Double Patty Burger', price: 350, image: './assets/pexels-jonathanborba-2983098.jpg' },
  // ];

  // filteredPopularItems = [...this.popularItems];
  // filteredNewArrivalItems = [...this.newArrivalItems];

  // constructor() {}

  // ngOnInit(): void {}

  // // Filter items based on search query
  // filterItems() {
  //   const query = this.searchQuery.toLowerCase();
  //   this.filteredPopularItems = this.popularItems.filter((item) =>
  //     item.name.toLowerCase().includes(query)
  //   );
  //   this.filteredNewArrivalItems = this.newArrivalItems.filter((item) =>
  //     item.name.toLowerCase().includes(query)
  //   );
  // }
  
  searchQuery: string = '';

  // Dummy JSON for Popular Items
  popularItems: BurgerItem[] = [
    { name: 'Classic Burger', price: 150, image: './assets/pexels-myfoodie-2702674.jpg', description: 'A classic burger with lettuce, tomato, and cheese.' },
    { name: 'Cheese Burst Burger', price: 200, image: './assets/pexels-horizon-content-2100060-3738730.jpg', description: 'A cheese-filled delight with extra cheese.' },
    { name: 'Spicy Chicken Burger', price: 250, image: './assets/pexels-narclique-660282.jpg', description: 'A spicy chicken burger with special sauce.' },
  ];

  // Dummy JSON for New Arrivals
  newArrivalItems: BurgerItem[] = [
    { name: 'BBQ Burger', price: 300, image: './assets/pexels-adrian-dorobantu-989175-2089717.jpg', description: 'A BBQ-flavored burger with crispy bacon.' },
    { name: 'Veggie Delight Burger', price: 180, image: './assets/pexels-daniel-reche-718241-3616956.jpg', description: 'A veggie burger with mushrooms, cheese, and fresh veggies.' },
    { name: 'Double Patty Burger', price: 350, image: './assets/pexels-jonathanborba-2983098.jpg', description: 'A double patty burger for the ultimate meat lover.' },
  ]; 

  filteredPopularItems: BurgerItem[] = [...this.popularItems];
  filteredNewArrivalItems: BurgerItem[] = [...this.newArrivalItems];
  
  selectedBurger: BurgerItem | null = null; // For storing selected burger details

  constructor() {}

  ngOnInit(): void {}


  filterItems() {
    const query = this.searchQuery.toLowerCase();
    this.filteredPopularItems = this.popularItems.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    this.filteredNewArrivalItems = this.newArrivalItems.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  }

  // Add item to cart
  addToCart(item: BurgerItem): void {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.reload();
  }

  // Show burger details in modal
  showBurgerDetails(item: BurgerItem): void {
    this.selectedBurger = item;
  }
}
