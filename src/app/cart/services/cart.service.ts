import { Injectable } from '@angular/core';

import { ICartProductModel } from '../models/icart-product-model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartProducts: ICartProductModel[] = [];
  private totalQuantity = 0;
  private totalSum = 0;

  constructor() { }

  private isExistProduct(id: string): boolean {
    return this.cartProducts.some((product) => product.id === id);
  }

  private updateCartData(): any {
    const dataObj = this.cartProducts.reduce((data: any, product: ICartProductModel) => {
      const sum = data.sum + product.price * product.quantity;
      const quantity = data.quantity + product.quantity;

      return {
        sum,
        quantity
      };
    }, {
      sum: 0,
      quantity: 0
    });

    this.totalSum = dataObj.sum.toFixed(2);
    this.totalQuantity = dataObj.quantity;
  }

  addProduct(data: ICartProductModel): void {
    if (this.isExistProduct(data.id)) {
      this.increaseQty(data, data.quantity);
    } else {
      this.cartProducts.unshift(data);
    }

    this.updateCartData();
  }

  increaseQty(data: ICartProductModel, qty: number = 1): void {
    const cartProsucts = this.cartProducts.map((product: ICartProductModel) => {
      const productObj = {...product};
      if (productObj.id === data.id) {
        productObj.quantity = product.quantity + qty;
        productObj.stockQty = data.stockQty;
      }
      return productObj;
    });

    this.cartProducts = cartProsucts;
    this.updateCartData();
  }

  decreaseQty(data: ICartProductModel): void {
    const cartProsucts = this.cartProducts.map((product: ICartProductModel) => {
      const productObj = {...product};
      if (productObj.id === data.id) {
        productObj.quantity = product.quantity - 1;
        productObj.stockQty = data.stockQty;
      }

      return productObj;
    });

    this.cartProducts = cartProsucts;
    this.updateCartData();
  }

  removeProduct(data): void {
    this.cartProducts.map((product: ICartProductModel, index) => {
      if (product.id === data.id) {
        this.cartProducts.splice(index, 1);
      }
    });

    this.updateCartData();
  }

  removeAllProducts(): ICartProductModel[] {
    const removedProducts = this.cartProducts;
    this.cartProducts = [];
    this.updateCartData();

    return removedProducts;
  }

  getProducts(): ICartProductModel[] {
    return this.cartProducts;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  getTotalQty(): number {
    return this.totalQuantity;
  }
}
