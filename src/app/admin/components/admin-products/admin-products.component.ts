import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProductModel } from '../../../product/models/iproduct-model';
import { ProductsService } from '../../../product/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.less']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  private sub: any;
  products: IProductModel[];

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.sub = this.productsService.products$.subscribe(data => this.products = data);
  }

  goBack(): void{
    this.router.navigateByUrl('/admin');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
