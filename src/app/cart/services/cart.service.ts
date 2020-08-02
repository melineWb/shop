import { Injectable } from '@angular/core';

import { ICartProductModel } from '../icart-product-model';

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
      this.products.map((product: ICartProductModel) => {
        if (product.id === data.id) {
          product.quantity += data.quantity;
          return product;
        }
      });
    } else {
      this.products.unshift(data);
    }
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
