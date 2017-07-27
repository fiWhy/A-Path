import { Injectable } from '@angular/core';
import { items } from "./basket-items.list";
import { Observable } from "rxjs/Observable";
import { BasketItem } from "./basket-item";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

@Injectable()
export class BasketService {

  constructor() { }

  getBasketItems(): Observable<BasketItem[]> {
    return Observable.of(items)
      .map((basketItems) => basketItems.map((item) => new BasketItem(item.id, item.name)))
  }

}
