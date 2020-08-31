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

  @Output() updateProductData = new EventEmitter<ICartProductModel[]>();
  @Output() removeCartProducts = new EventEmitter<ICartProductModel[]>();

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
    const productsData = [];
    productsData.push({...product, stockQty: product.stockQty + product.quantity});

    this.updateProductData.emit(productsData);
    this.cartService.removeProduct(product);
    this.getCartData();

    if (!this.products.length) { this.isVisiblePopover = false; }
  }

  decreaseItemQty(product: ICartProductModel): void {
    const productsData: ICartProductModel[] = [];
    productsData.push(product);

    this.updateProductData.emit(productsData);
    this.cartService.decreaseQty(product);
    this.getCartData();
  }

  increaseItemQty(product: ICartProductModel): void {
    const productsData: ICartProductModel[] = [];
    productsData.push(product);

    this.updateProductData.emit(productsData);
    this.cartService.increaseQty(product);
    this.getCartData();
  }

  removeAllItems(): void {
    let removedProduts = this.cartService.removeAllProducts();
    removedProduts =  removedProduts.map((product: ICartProductModel): ICartProductModel => {
      return {...product, stockQty: product.stockQty + product.quantity};
    });

    this.getCartData();
    this.isVisiblePopover = false;
    this.removeCartProducts.emit(removedProduts);
  }

  toglePopover(): void {
    this.isVisiblePopover = !this.isVisiblePopover;
  }
}
