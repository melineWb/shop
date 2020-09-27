import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProductModel } from '../../../product/models/iproduct-model';
import { ProductsService } from '../../../product/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.less']
})
export class AdminProductsComponent implements OnInit {
  products: IProductModel[];

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.products$.subscribe(data => this.products = data);
  }

  goBack(): void{
    this.router.navigateByUrl('/admin');
  }
}
