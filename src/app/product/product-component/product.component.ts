import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { IProductModel } from '../models/iproduct-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit{
  cartAddedQty:number;
  @Input() data: IProductModel;
  @Output() addToCart = new EventEmitter<IProductModel>();

  constructor() { }

  ngOnInit(): void {
    this.cartAddedQty = 1
    // cartAddedQty does not part of data from json, this is set from this component 1 (by default) || value from qty field
    this.data.cartAddedQty = this.cartAddedQty;
  }

  onBuy(): void {
    this.checkValidationQty(this.data.cartAddedQty);
    this.data.stockQty -= this.data.cartAddedQty;
    this.addToCart.emit(this.data);
    this.cartAddedQty = 1
    // cartAddedQty does not part of data from json, this is set from this component 1 (by default) || value from qty field
    this.data.cartAddedQty = this.cartAddedQty;
  }

  changeAddedQty(qty: number): void {
    if (!qty) { return; }
    this.data.cartAddedQty = qty;
  }

  checkValidationQty(qty: number): void {
    if (qty < 1) {
      this.data.cartAddedQty = 1;
    } else if (qty > this.data.stockQty) {
      this.data.cartAddedQty = this.data.stockQty;
    }
  }
}
