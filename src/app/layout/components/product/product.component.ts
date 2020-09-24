import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProductModel } from '../../../product/models/iproduct-model';
import { ProductsService } from '../../../product/services/products.service';
import { CartService } from '../../../cart/services/cart.service';
import { ICartProductModel } from '../../../cart/models/icart-product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit, OnDestroy {
  private sub: any;
  id: string;
  products: IProductModel[];
  data: IProductModel;
  cartAddedQty = 1;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.id = params.id;

       this.productsService.prouscts$.subscribe(data => {
         this.products = data;

         this.products.forEach((item): void => {
            if (this.id === item.id) {
              this.data = item;
              this.data.cartAddedQty = this.cartAddedQty;
            }
          });
        });
    });

    this.cartService.data$.subscribe(res => this.updateProductData(res.removedProducts.length ? res.removedProducts : res.cartProducts));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onBuy(): void {
    this.checkValidationQty(this.data.cartAddedQty);
    this.data.stockQty -= this.data.cartAddedQty;
    this.addToCart(this.data);
    this.data.cartAddedQty = 1;

    this.cartAddedQty = 1; // reset Qty in input after added to cart
  }

  changeAddedQty(qty: number): void {
    if (!qty) { return; }

    this.data.cartAddedQty = qty;
  }

  checkValidationQty(qty: number): void {
    if (qty < 1) {
      this.data.cartAddedQty = 1;
    } else if (qty > this.data.stockQty) {
      this.data.cartAddedQty = this.data.stockQty;
    }
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
    data.forEach((item): void => {
      if (item && this.id === item.id) {
        this.data.stockQty = item.stockQty;
      }
    });
  }
}
