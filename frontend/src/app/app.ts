import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Api } from './api';
import { Cart } from './cart';

@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('frontend');
 
  serachText:string = '';
  cartCount:number = 0;
  constructor(private api: Api,private cart:Cart) {}

  serachProducts() {
    this.api.searchProduct(this.serachText)
  }

  clearSearch() {
    if(this.serachText == '') {
      this.serachProducts();
    }
  }

  searchByEnter() {
    this.serachProducts();
  } 

  ngOnInit(): void {
    this.cart.currentItems.subscribe((items) => {
      this.cartCount = items.length;
    });
  }
}
