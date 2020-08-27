import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IProductModel } from '../models/iproduct-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() data: IProductModel;
  @Input() cartAddedQty = 1;

  @Output() addToCart = new EventEmitter<IProductModel>();

  constructor() { }

  ngOnInit(): void {
    this.data.cartAddedQty = 1; // эти данные компонент получает извне, не лучшее решение их тут менять
  }

  onBuy(): void {
    this.checkValidationQty(this.data.cartAddedQty);
    this.data.stockQty -= this.data.cartAddedQty;
    this.addToCart.emit(this.data);
    this.data.cartAddedQty = 1;
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
