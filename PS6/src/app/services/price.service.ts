import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { PRICE} from "../models/priceModel";

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };
  pricesEndpoint = 'http://localhost:3000/ps4/';


  getPrice(): Observable<PRICE[]> {
    return this.httpClient.get<PRICE[]>(this.pricesEndpoint, this.httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
