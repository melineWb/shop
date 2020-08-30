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
  @Output() removeCartProducts = new EventEmitter<any>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartData();
  }

  // used In Header Component for update cart Qty
  getCartData(): void{
    this.products = this.cartService.getProducts();
    this.totalPrice = this.cartService.getTotalSum();
    this.totalQty = this.cartService.getTotalQty();
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

  removeAllItems(): void {
    this.cartService.removeAllProducts();
    this.getCartData();
    this.isVisiblePopover = false;
    this.removeCartProducts.emit();
  }

  toglePopover(): void {
    this.isVisiblePopover = !this.isVisiblePopover;
  }
}
