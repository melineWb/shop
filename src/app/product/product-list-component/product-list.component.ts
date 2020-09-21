import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductsService } from '../services/products.service';
import { CartService } from '../../cart/services/cart.service';
import { IProductModel } from '../models/iproduct-model';
import { ICartProductModel } from 'src/app/cart/models/icart-product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProductModel[]>;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
    this.cartService.data$.subscribe(res => this.updateProductData(res.cartProducts));
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
    this.products$.subscribe(products => {
      const cartProducts = products.map((product: IProductModel) => {
        const productObj = {...product};

        data.forEach((item): void => {
          if (productObj.id === item.id) {
            productObj.stockQty = item.stockQty;
          }
        });
        return productObj;
      });

      this.products$ = new Observable((observer) => {
          observer.next(cartProducts);
          observer.complete();
      });
    });
  }
}
