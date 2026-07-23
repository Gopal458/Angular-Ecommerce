import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  constructor() { }
  itemsSource= new BehaviorSubject<any[]>([]);
  currentItems = this.itemsSource.asObservable();

  addItem(item: any){
    const currentItems = this.itemsSource.value;

    // Check if item already exists in cart
    const existingItem = currentItems.find((i: any) => i.product._id === item.product._id);

    console.log('existingItem', existingItem);
    if (existingItem) {
      // If item exists, increment quantity
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      // If item doesn't exist, add it with quantity 1
      this.itemsSource.next([...currentItems, item]);
    }
    

  }
}

