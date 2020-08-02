import { Component, Output, OnInit, EventEmitter } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { IProductModel } from '../models/iproduct-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: IProductModel[];

  @Output() updateCart = new EventEmitter<number>();

  constructor(private productsServiceService: ProductsService) { }

  ngOnInit(): void {
    this.productsServiceService.getProducts()
      .subscribe(data => { this.products = data; });
  }

  addToCart(cartAddedQty: number): void {
    this.updateCart.emit(cartAddedQty);
  }
}
