import { Component, OnInit, Input } from '@angular/core';

import { BasketItem } from "../../basket-item";

@Component({
  selector: 'app-basket-items',
  templateUrl: './basket-items.component.html',
  styleUrls: ['./basket-items.component.scss']
})
export class BasketItemsComponent implements OnInit {
  @Input() items: BasketItem[];
  constructor() { }

  ngOnInit() {
  }

}
