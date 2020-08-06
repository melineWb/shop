import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core';

import { ICartProductModel } from '../models/icart-product-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartItemComponent implements OnInit, OnChanges {
  @Input() product: ICartProductModel;
  maxProductQty: number;

  @Output() removeCartItem = new EventEmitter<ICartProductModel>();
  @Output() updateItemQty = new EventEmitter<ICartProductModel>();

  constructor() { }

  ngOnInit(): void {
    this.setMaxQty();
  }

  ngOnChanges(): void {
    this.setMaxQty();
  }

  private setMaxQty(): void {
    this.maxProductQty = this.product.quantity + this.product.stockQty;
  }


  removeItem(): void {
    this.removeCartItem.emit(this.product);
  }

  changeQty(quantity: number): void {
    if (!quantity) {
      return;
    }

    if (quantity < 1) {
      quantity = 1;
    } else if (quantity > this.maxProductQty) {
      quantity = this.maxProductQty;
    }

    const data = {...this.product,
      quantity,
      stockQty: this.maxProductQty
    };

    this.updateItemQty.emit(data);
  }

}
