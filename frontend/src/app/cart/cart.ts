import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent implements OnInit {
  constructor(private cartService:Cart) {}
  cartItems:any = {};

  cartQty = 0;
  cartTotal = 0;
  cartCount = 0;

  ngOnInit(): void {
    this.cartService.currentItems.subscribe((data:any) => {
      this.cartItems = data;
      this.calculateCart();
    });
  }

  calculateCart() {
    this.cartTotal = this.cartItems.reduce((total: number, item: any) => total + (item.product.price * item.qty), 0);
    this.cartCount = this.cartItems.length;
    this.cartQty = this.cartItems.reduce((total: number, item: any) => total + item.qty, 0);
  }

  deleteItem(item: any) {
    this.cartItems = this.cartItems.filter((i: any) => i !== item);
    this.cartService.updateItems(this.cartItems);
    this.calculateCart();
  }

  increaseQty(item: any) {
    item.qty++;
    this.cartService.updateItems(this.cartItems);
    this.calculateCart();
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
      this.cartService.updateItems(this.cartItems);
      this.calculateCart();
    }
  }
  
}
