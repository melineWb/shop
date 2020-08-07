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
    this.data.cartAddedQty = 1;
  }

  onBuy(): void {
    this.data.stockQty -= this.data.cartAddedQty;
    this.addToCart.emit(this.data);
  }
}
