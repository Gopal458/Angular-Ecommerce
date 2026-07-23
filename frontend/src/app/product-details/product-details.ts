import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../api';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  product:any=null

  constructor(private route:ActivatedRoute,private api:Api){}

  ngOnInit(): void {
    this.route.params.subscribe((data) =>{
      const id:string = data['id'];
      this.api.getProductById(id).subscribe((data:any) =>{
        this.product=data.product;

        console.log('text',this.product);
        
      })
    })
  }
}
