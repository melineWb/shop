import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';

import { ICartProductModel } from '../models/icart-product-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartItemComponent implements OnInit, OnChanges {
  @Input() product: ICartProductModel;
  disableMaxQtyErr = false;
  maxProductQty: number;

  @Output() removeCartItem = new EventEmitter<ICartProductModel>();
  @Output() increaseItemQty = new EventEmitter<ICartProductModel>();
  @Output() decreaseItemQty = new EventEmitter<ICartProductModel>();

  constructor(public cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setMaxQty();
  }

  ngOnChanges(): void {
    this.setMaxQty();
  }

  private setMaxQty(): void {
    this.maxProductQty = this.product.quantity + this.product.stockQty;
  }

  private timeoutMsgDisable(): void {
    setTimeout((): void => {
      this.disableMaxQtyErr = false;
      this.cd.detectChanges();
    }, 3000);
  }

  removeItem(): void {
    this.removeCartItem.emit(this.product);
  }

  decreaseQty(): void {
    if (this.product.quantity === 1) {
      this.disableMaxQtyErr = false;
      return;
    }

    this.decreaseItemQty.emit({...this.product,
      stockQty: this.product.stockQty + 1
    });
  }

  increaseQty(): void {
    if (this.product.quantity === this.maxProductQty) {
      this.disableMaxQtyErr = true;
      this.timeoutMsgDisable();
      return;
    }

    this.increaseItemQty.emit({...this.product,
      stockQty: this.product.stockQty - 1
    });
  }
}
