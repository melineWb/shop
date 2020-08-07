import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CartService } from '../services/cart.service';
import { ICartProductModel } from '../models/icart-product-model';

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

  @Output() updateProductData = new EventEmitter<ICartProductModel>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(): void{
    this.products = this.cartService.getProducts();

    const dataObj = this.products.reduce((data: any, product: ICartProductModel) => {
      const price = data.price + product.price * product.quantity;
      const quantity = data.quantity + product.quantity;

      return {
        price,
        quantity
      };
    }, {
      price: 0,
      quantity: 0
    });

    this.totalPrice = dataObj.price.toFixed(2);
    this.totalQty = dataObj.quantity;
  }

  removeCartItem(product: ICartProductModel): void {
    this.updateProductData.emit({...product, stockQty: product.stockQty + product.quantity});
    this.cartService.removeProduct(product);
    this.getCartData();
  }

  decreaseItemQty(product: ICartProductModel): void {
    this.updateProductData.emit(product);
    this.cartService.decreaseQty(product);
    this.getCartData();
  }

  increaseItemQty(product: ICartProductModel): void {
    this.updateProductData.emit(product);
    this.cartService.increaseQty(product);
    this.getCartData();
  }

  toglePopover(): void {
    this.isVisiblePopover = !this.isVisiblePopover;
  }
}
