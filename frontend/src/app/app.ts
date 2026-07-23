import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Api } from './api';

@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
 
  serachText:string = '';
  constructor(private api: Api) {}

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
}
