import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../services/products.service';
import { CartService } from '../../cart/services/cart.service';
import { IProductModel } from '../models/iproduct-model';
import { ICartProductModel } from '../../cart/models/icart-product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit, OnDestroy {
  private initedCartData = false;
  private subProductServ: any;
  private subCartServ: any;
  products: IProductModel[];

  constructor( private productsService: ProductsService, private cartService: CartService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.subProductServ = this.productsService.products$.subscribe(data => {
      this.products = data;
      if (this.checkCartProducts()) {
        this.initedCartData = true;
        this.updateProductData(this.cartService.getProductsArray());
      }
    });

    this.subCartServ = this.cartService.data$.subscribe(res => {
      if (this.checkCartProducts()) {
        this.initedCartData = true;
      }
      this.updateProductData(res.removedProducts.length ? res.removedProducts : res.cartProducts);
    });
  }

  private checkCartProducts(): boolean {
    return this.products.length && !this.initedCartData;
  }

  addToCart(data: IProductModel, cartAddedQty: number): void {
    this.cartService.addProduct({
      id: data.id,
      name: data.name,
      imgSrc: data.imgSrc,
      price: data.price,
      quantity: data.cartAddedQty,
      stockQty: data.stockQty,
    });

    this.productsService.updateProduct(data);
  }

  updateProductData(data: ICartProductModel[]): void {
    this.products.map((product: IProductModel) => {
      const productObj = {...product};

      data.forEach((item): void => {
        if (productObj.id === item.id) {
          productObj.stockQty = item.stockQty;
        }
      });

      this.productsService.updateProduct(productObj);
    });
  }

  ngOnDestroy(): void {
    this.subProductServ.unsubscribe();
    this.subCartServ.unsubscribe();
  }
}
