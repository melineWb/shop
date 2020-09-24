import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { CartService } from '../../cart/services/cart.service';
import { IProductModel } from '../models/iproduct-model';
import { ICartProductModel } from '../../cart/models/icart-product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: IProductModel[];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.prouscts$.subscribe(data => this.products = data);
    this.cartService.data$.subscribe(res => this.updateProductData(res.removedProducts.length ? res.removedProducts : res.cartProducts));
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
  }

  updateProductData(data: ICartProductModel[]): void {
    // const cartProducts = this.products.map((product: IProductModel) => {
    //   const productObj = {...product};

    //   data.forEach((item): void => {
    //     if (productObj.id === item.id) {
    //       productObj.stockQty = item.stockQty;
    //     }
    //   });
    //   return productObj;
    // });

    // this.products = cartProducts;
  }
}
