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

  // наверное, должен быть приватным
  getCartData(): void{
    this.products = this.cartService.getProducts();

    const totalCartData = this.cartService.getTotalData();
    this.totalPrice = totalCartData.totalPrice;
    this.totalQty = totalCartData.totalQty;
  }

  removeCartItem(product: ICartProductModel): void {
    this.updateProductData.emit({...product, stockQty: product.stockQty + product.quantity});
    this.cartService.removeProduct(product);
    this.getCartData();

    if (!this.products.length) { this.isVisiblePopover = false; }
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
