import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IProductModel } from '../models/iproduct-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input() data: IProductModel;
  @Input() cartAddedQty = 1;

  @Output() addToCart = new EventEmitter<IProductModel>();

  constructor() { }

  ngOnInit(): void {
    this.data.cartAddedQty = 1;
    this.checkAvailability();
  }

  onBuy(): void {
    this.data.stockQty -= 1;
    this.addToCart.emit(this.data);

    this.checkAvailability();
  }

  private checkAvailability(): void {
    if (this.data.stockQty === 0) {
      this.data.isAvailabile = false;
    }
  }
}
