import { Injectable } from '@angular/core';
import { items } from "./basket-items.list";
import { Observable } from "rxjs/Observable";
import { BasketItem } from "./basket-item";
import "rxjs/add/operator/map";
import "rxjs/add/operator/find";
import "rxjs/add/observable/from";
import "rxjs/add/observable/of";

@Injectable()
export class BasketService {
  private basketItems: Observable<BasketItem[]>;
  constructor() { }

  getBasketItems(): Observable<BasketItem[]> {
    return this.basketItems = Observable.of(items)
      .map((basketItems) => basketItems.map((item) => new BasketItem(item.id, item.name)))
  }

  pickItem(id: number): Observable<BasketItem> {
    return this.basketItems.map((items) => items.find((item) => item.id === Number(id) ));
  }

}
