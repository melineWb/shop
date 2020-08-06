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

      const cartProsucts = this.products.map((product: ICartProductModel) => {
        const productObj = {...product};
        if (productObj.id === data.id) {
          productObj.quantity += data.quantity;
          productObj.stockQty = data.stockQty;
        }

        return productObj;
      });

      this.products = cartProsucts;

    } else {
      this.products.unshift(data);
    }
  }

  setQty(data: ICartProductModel): void {
    const cartProsucts = this.products.map((product: ICartProductModel) => {
      const productObj = {...product};
      if (productObj.id === data.id) {
        productObj.quantity = data.quantity;
        productObj.stockQty = data.stockQty - data.quantity;
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
}
