import { Component, Output, OnInit, EventEmitter } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { CartService } from '../../cart/services/cart.service';
import { IProductModel } from '../models/iproduct-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: IProductModel[];

  @Output() updateCart = new EventEmitter<number>();

  constructor(private productsServiceService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsServiceService.getProducts()
      .subscribe(data => { this.products = data; });
  }

  addToCart(data: IProductModel): void {
    this.cartService.addProduct({
      id: data.id,
      name: data.name,
      imgSrc: data.imgSrc,
      price: data.price,
      quantity: data.cartAddedQty
    });

    this.updateCart.emit(data.cartAddedQty);
  }
}
