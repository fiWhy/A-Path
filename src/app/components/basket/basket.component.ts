import { Component, OnInit } from '@angular/core';
import { BasketService } from "./basket.service";
import { BasketItem } from "./basket-item";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  providers: [BasketService]
})
export class BasketComponent implements OnInit {
  public basketItems: Observable<BasketItem[]>;
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketItems = this.basketService.getBasketItems();
  }

}
