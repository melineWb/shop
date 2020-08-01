import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProductModel } from './iproduct-model';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private dataJson = '/assets/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProductModel[]> {
    return this.http.get<IProductModel[]>(this.dataJson);
  }
}
