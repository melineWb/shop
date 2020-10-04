import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ICartProductModel } from '../models/icart-product-model';
import { ICartResultModel } from '../models/icart-result-model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartProducts: ICartProductModel[];
  private totalQuantity = 0;
  private totalSum = 0;
  private cartResult: ICartResultModel;
  private dataCartResult: any;
  private msg: string;
  private removedProducts: ICartProductModel[] = [];
  data$: Observable<any>;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.cartProducts = this.localStorageService.getItem('cartProducts') || [];

    this.cartResult = {
      cartProducts: this.cartProducts,
      removedProducts: this.removedProducts,
      totalQuantity: this.totalQuantity,
      totalSum: this.totalSum,
      msg: this.msg,
    };

    this.dataCartResult = new BehaviorSubject(this.cartResult);
    this.data$ = this.dataCartResult.asObservable();

    if (this.cartProducts.length) {
      this.updateCartData();
    }
  }

  private isExistProduct(id: string): boolean {
    return this.cartProducts.some((product) => product.id === id);
  }

  private cartCounter(): any {
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

  private updateCartData(): any {
    this.cartCounter();
    this.updateAppData();
  }

  updateAppData(): any {
    const dataResult = {
      cartProducts: this.cartProducts,
      removedProducts: this.removedProducts,
      totalSum: this.totalSum,
      totalQuantity: this.totalQuantity,
      msg: this.msg
    };

    this.localStorageService.setItem('cartProducts', this.cartProducts);
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
    this.removedProducts = [];

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
    this.removedProducts = [];

    this.updateCartData();
  }

  removeProduct(data): void {
    this.removedProducts = [];
    this.removedProducts.push({...data, stockQty: data.stockQty + data.quantity});

    this.cartProducts.map((product: ICartProductModel, index) => {
      if (product.id === data.id) {
        this.cartProducts.splice(index, 1);
      }
    });
    this.msg = `Product ${data.name} removed`;

    this.updateCartData();
  }

  removeAllProducts(hideMsg?: boolean): void {
    this.removedProducts = this.cartProducts.map((product: ICartProductModel): ICartProductModel => {
      return {...product, stockQty: product.stockQty + product.quantity};
    });
    this.cartProducts = [];
    this.msg = hideMsg ? '' : 'All items in the cart was successfully removed';
    this.updateCartData();
  }

  getProducts(): number {
    return this.cartProducts.length;
  }

  getProductsArray(): ICartProductModel[] {
    return this.cartProducts;
  }
}
