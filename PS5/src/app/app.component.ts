import { Component } from '@angular/core';
import { PRICES } from './price-MOCK';
import {PRICES} from './price';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CS591 PS5';
  prices = PRICES;
  private selectedPrice: PRICE;


  selectPrice(price: PRICE) {
    this.selectedPrice = price;

  }
}
