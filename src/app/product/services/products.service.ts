import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProductModel } from '../models/iproduct-model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private dataJson = '/assets/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProductModel[]> {
    return this.http.get<IProductModel[]>(this.dataJson);
  }

  updateProductListData(): void {

  }
}
