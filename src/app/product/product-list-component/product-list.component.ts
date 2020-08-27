import { Component, Output, OnInit, EventEmitter } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { CartService } from '../../cart/services/cart.service';
import { IProductModel } from '../models/iproduct-model';
import { ICartProductModel } from 'src/app/cart/models/icart-product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: IProductModel[];

  @Output() updateCart = new EventEmitter<number>();

  constructor(private productsServiceService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    const prosuctSubsr = this.productsServiceService.getProducts()
      .subscribe(data => { 
        this.products = data;
        prosuctSubsr.unsubscribe();
      });
  }

  addToCart(data: IProductModel): void {
    this.cartService.addProduct({
      id: data.id,
      name: data.name,
      imgSrc: data.imgSrc,
      price: data.price,
      quantity: data.cartAddedQty,
      stockQty: data.stockQty
    });

    this.updateCart.emit(data.cartAddedQty);
  }

  updateProductData(data: ICartProductModel): void {
    const cartProsucts = this.products.map((product: IProductModel) => {
      const productObj = {...product};
      if (productObj.id === data.id) {
        productObj.stockQty = data.stockQty;
      }

      return productObj;
    });

    this.products = cartProsucts;
  }
}
