import { BasketItem } from "./basket-item";

export class BasketNet {
    private _items: BasketItem[] = []
    constructor() { }

    set item(item: BasketItem) { 
        this._items.push(item)
    }

    get items() {
        return this._items;
    }
}