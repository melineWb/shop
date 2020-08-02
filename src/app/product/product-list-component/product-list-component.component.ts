import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { ProductsService } from '../../products.service';
import { IProductModel } from '../iproduct-model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html'
})
export class ProductListComponentComponent implements OnInit {
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
