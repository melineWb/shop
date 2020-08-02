import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../services/cart.service';
import { ICartProductModel } from '../icart-product-model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit {
  totalPrice = 0;
  isVisiblePopover = false;
  products: ICartProductModel[];
  totalQty = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(): void{
    this.products = this.cartService.getProducts();

    const totalPrice = this.products.reduce((val: any, product: ICartProductModel) => {
      return val + product.price * product.quantity;
    }, 0);
    this.totalPrice = totalPrice.toFixed(2);
    this.totalQty = this.products.length;
  }

  removeItem(product: ICartProductModel): void {
    this.cartService.removeProduct(product);
    this.getCartData();
  }

  toglePopover(): void {
    this.isVisiblePopover = !this.isVisiblePopover;
  }
}
