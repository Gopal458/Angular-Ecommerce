import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  productSource=new BehaviorSubject([]);
  currentProducts=this.productSource.asObservable();

  getProducts() {
     this.http.get(environment.apiUrl+'/api/v1/products').subscribe((data:any) => {
      this.productSource.next(data)
     });
  }

  searchProduct(name: string) {
    this.http.get(environment.apiUrl+'/api/v1/products?name='+name).subscribe((data:any) =>{
      this.productSource.next(data)
    });
  }

  getProductById(id:string)
  {
    return this.http.get(environment.apiUrl+'/api/v1/product/'+id);
  }

}
