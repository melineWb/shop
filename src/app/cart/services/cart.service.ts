import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ICartProductModel } from '../models/icart-product-model';
import { ICartResultModel } from '../models/icart-result-model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartProducts: ICartProductModel[] = [];
  private totalQuantity = 0;
  private totalSum = 0;
  private cartResult: ICartResultModel;
  private dataCartResult: any;
  private msg: string;
  data$: any;

  constructor() {
    this.cartResult = {
      cartProducts: this.cartProducts,
      totalQuantity: this.totalQuantity,
      totalSum: this.totalSum,
      msg: this.msg,
    };

    this.dataCartResult = new BehaviorSubject(this.cartResult);
    this.data$ = this.dataCartResult.asObservable();
  }

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
    this.updateAppData();
  }

  updateAppData(): any {
    const dataResult = {
      cartProducts: this.cartProducts,
      totalSum: this.totalSum,
      totalQuantity: this.totalQuantity,
      msg: this.msg
    };
    this.dataCartResult.next(dataResult);
  }

  addProduct(data: ICartProductModel): void {
    if (this.isExistProduct(data.id)) {
      this.increaseQty(data, data.quantity);
    } else {
      this.cartProducts.unshift(data);
      this.msg = `${data.quantity} item(s) of ${data.name} added to cart`;
      this.updateCartData();
    }
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
    this.msg = `${qty} item(s) of ${data.name} added to cart`;

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
    this.msg = `Qty of ${data.name} product decreased`;

    this.cartProducts = cartProsucts;
    this.updateCartData();
  }

  removeProduct(data): void {
    this.cartProducts.map((product: ICartProductModel, index) => {
      if (product.id === data.id) {
        this.cartProducts.splice(index, 1);
      }
    });

    this.msg = `Product ${data.name} removed`;

    this.updateCartData();
  }

  removeAllProducts(): ICartProductModel[] {
    const removedProducts = this.cartProducts;
    this.cartProducts = [];

    this.msg = `All items in the cart was successfully removed`;
    this.updateCartData();
    return removedProducts;
  }
}
