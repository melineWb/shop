import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { IProductModel } from '../iproduct-model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.less'],
  providers: [ProductsServiceService]
})
export class ProductListComponentComponent implements OnInit {
  products: IProductModel[];

  constructor(private productsServiceService: ProductsServiceService) { }

  ngOnInit(): void {
    this.productsServiceService.getProducts()
      .subscribe(data => { this.products = data; });
  }
}
