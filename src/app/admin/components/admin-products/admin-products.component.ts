import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { IProductModel } from '../../../product/models/iproduct-model';
import { ProductsService } from '../../../product/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.less']
})
export class AdminProductsComponent implements OnInit {
  products: IProductModel[];

  constructor(private location: Location, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.products$.subscribe(data => this.products = data);
  }

  updateProductData(data: IProductModel): void {

  }


  goBack(): void{
    this.location.back();
  }
}
