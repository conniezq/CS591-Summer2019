import { Component, OnInit } from '@angular/core';
import { PriceService } from "./services/price.service";
import {PRICE} from './models/priceModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  prices: PRICE[];

  getPrice(): void {
    this.price.getDefualtPrice()
      .subscribe(prices => {
        this.prices = prices;
      });
  }


  constructor(private price: PriceService) { }

  ngOnInit() {
    this.getPrice();
  }

}

