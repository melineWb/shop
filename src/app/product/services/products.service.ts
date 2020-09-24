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
  prouscts$: any;

  constructor(private http: HttpClient) {
    this.dataProducts = new BehaviorSubject(this.products);
    this.prouscts$ = this.dataProducts.asObservable();

    this.http.get<IProductModel[]>(this.dataJson)
      .subscribe((data: IProductModel[]) => {
        this.products = data;

        this.dataProducts.next(data)
      });
  }

  updateProductListData(): void {

  }
}
