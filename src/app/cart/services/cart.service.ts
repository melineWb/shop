import { Injectable } from '@angular/core';

import { ICartProductModel } from '../models/icart-product-model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private products: ICartProductModel[] = [];

  constructor() { }

  private isExistProduct(id: string): boolean {
    return this.products.some((product) => product.id === id);
  }

  addProduct(data: ICartProductModel): void {
    if (this.isExistProduct(data.id)) {
      this.increaseQty(data, data.quantity);
    } else {
      this.products.unshift(data);
    }
  }

  increaseQty(data: ICartProductModel, qty: number = 1): void {
    const cartProsucts = this.products.map((product: ICartProductModel) => {
      const productObj = {...product};
      if (productObj.id === data.id) {
        productObj.quantity = product.quantity + qty;
        productObj.stockQty = data.stockQty;
      }
      return productObj;
    });

    this.products = cartProsucts;
  }

  decreaseQty(data: ICartProductModel): void {
    const cartProsucts = this.products.map((product: ICartProductModel) => {
      const productObj = {...product};
      if (productObj.id === data.id) {
        productObj.quantity = product.quantity - 1;
        productObj.stockQty = data.stockQty;
      }

      return productObj;
    });

    this.products = cartProsucts;
  }

  removeProduct(data): void {
    this.products.map((product: ICartProductModel, index) => {
      if (product.id === data.id) {
        this.products.splice(index, 1);
      }
    });
  }

  getProducts(): ICartProductModel[] {
    return this.products;
  }

  getTotalData(): any {
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

    return {
      totalPrice: dataObj.price.toFixed(2),
      totalQty: dataObj.quantity
    }
  }
}
