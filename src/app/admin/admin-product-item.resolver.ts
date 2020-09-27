import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {IProductModel} from '../product/models/iproduct-model';
import {ProductsService} from '../product/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class AdminProductItemResolver implements Resolve<IProductModel> {

  constructor(private productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot): IProductModel {
    return this.productsService.getProductById(route.paramMap.get('id'));
  }
}
