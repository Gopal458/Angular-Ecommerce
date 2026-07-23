import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../api';
import { Cart } from '../cart';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  product:any=null;
  qty:number=1;

  constructor(private route:ActivatedRoute,private api:Api,private cart:Cart){}

  decreaseQty() {
    if (this.qty > 1) {
      this.qty--;
    }
  }

  increaseQty() {
    if(this.qty < this.product.stock) {
      this.qty++;
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) =>{
      const id:string = data['id'];
      console.log('Fetching product with ID:', id);
      this.api.getProductById(id).subscribe((data:any) =>{
        console.log('Product data received:', data);
        this.product=data.product;
      }, (error) => {
        console.error('Error fetching product:', error);
      })
    })
  }

  addToCart() {
    const newCartItem={
      product:this.product,
      qty:this.qty
    }
    console.log('Adding to cart:', newCartItem);
    this.cart.addItem(newCartItem);
  }
}
