import { Component, OnInit } from '@angular/core';

import { BasketItem } from "../../basket-item";
import { BasketNet } from "../../basket-net";
import { BasketService } from "../../basket.service";

import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-basket-net',
  templateUrl: './basket-net.component.html',
  styleUrls: ['./basket-net.component.scss']
})
export class BasketNetComponent implements OnInit {
  public basketNet: BasketNet;
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketNet = new BasketNet();
  }

  handleDrop(id: number) {
    this.basketService.pickItem(id).subscribe((item: BasketItem) => {
      this.basketNet.item = item;
    });
  }

}
