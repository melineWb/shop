import { Component, OnInit } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';
import { Router } from '@angular/router';

import { CartService } from '../../../cart/services/cart.service';
import { ICartProductModel } from '../../../cart/models/icart-product-model';
import { OrderByPipe } from '../../../shared/pipes/order-by.pipe';
import { ICartResultModel } from '../../../cart/models/icart-result-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  providers: [OrderByPipe]
})
export class CartComponent implements OnInit {
  totalPrice = 0;
  products: ICartProductModel[];
  totalQty = 0;
  orderFlag = false;
  selectedOrder = 'price';

  orderItems: NgOption[] = [
    {
      name: 'Order by Price',
      id: 'price',
    }, {
      name: 'Order by Name',
      id: 'name',
    }, {
      name: 'Order by Quantity',
      id: 'quantity',
    }
  ];

  constructor(
    private cartService: CartService,
    private orderByPipe: OrderByPipe,
    private router: Router) { }

  ngOnInit(): void {
    this.cartService.data$.subscribe(res => this.getCartData(res));
  }

  // used In Header Component for update cart Qty
  getCartData(res: ICartResultModel): void {
    this.getSortedProducts(res.cartProducts);
    this.totalPrice = res.totalSum;
    this.totalQty = res.totalQuantity;
  }

  reOrder(): void {
    this.getSortedProducts(this.products);
  }

  getSortedProducts(products: ICartProductModel[]): void {
    this.products = this.orderByPipe.transform(products, this.selectedOrder, this.orderFlag);
  }

  revertSortOrder(): void {
    this.orderFlag = !this.orderFlag;
    this.getSortedProducts(this.products);
  }

  removeCartItem(product: ICartProductModel): void {
    const productsData = [];
    productsData.push({...product, stockQty: product.stockQty + product.quantity});

    this.cartService.removeProduct(product);
  }

  decreaseItemQty(product: ICartProductModel): void {
    const productsData: ICartProductModel[] = [];
    productsData.push(product);

    this.cartService.decreaseQty(product);
  }

  increaseItemQty(product: ICartProductModel): void {
    const productsData: ICartProductModel[] = [];
    productsData.push(product);

    this.cartService.increaseQty(product);
  }

  removeAllItems(): void {
    this.cartService.removeAllProducts();
  }

  navigateToShop(): void {
    this.router.navigateByUrl('products-list');
  }

  navigateToOrder(): void {
    this.router.navigateByUrl('order');
  }
}
