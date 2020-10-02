import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { IProductModel } from '../models/iproduct-model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: IProductModel[] = [];
  private dataJson = '/assets/data.json';
  private dataProducts: any;
  products$: any;

  constructor(private http: HttpClient) {
    this.dataProducts = new BehaviorSubject(this.products);
    this.products$ = this.dataProducts.asObservable();

    this.http.get<IProductModel[]>(this.dataJson)
      .subscribe((data: IProductModel[]) => {
        this.products = data;

        // можно так, а можно вернуть поток, который создается методом get
        this.dataProducts.next(data);
      });
  }

  getProductById(id: string): IProductModel {
    return this.products.find((item: IProductModel): IProductModel => {
      if (item.id === id) {
        return item;
      }
    });
  }

  addProduct(data: IProductModel): void {
    this.products.unshift(data);
    this.dataProducts.next(this.products);
  }

  updateProduct(data: IProductModel): void {
    this.products = this.products.map((item: IProductModel): IProductModel => {
      if (item.id === data.id) {
        item = data;
      }
      return item;
    });

    this.dataProducts.next(this.products);
  }
}
