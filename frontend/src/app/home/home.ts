import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Api } from '../api';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  products:any= [];

  constructor(private api: Api) {}
  ngOnInit(): void {
    this.api.getProducts();
    this.api.currentProducts.subscribe((data:any) => {
      this.products = data.products;
    });
  }
  
  
  
}
