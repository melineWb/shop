import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';

import { CartService } from '../services/cart.service';
import { ICartProductModel } from '../models/icart-product-model';
import { OrderByPipe } from '../../shared/pipes/order-by.pipe';
import { ICartResultModel } from '../models/icart-result-model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less'],
  providers: [OrderByPipe]
})
export class CartListComponent implements OnInit {
  totalPrice = 0;
  isVisiblePopover = false;
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

  @Output() updateProductData = new EventEmitter<ICartProductModel[]>();
  @Output() removeCartProducts = new EventEmitter<ICartProductModel[]>();

  constructor(private cartService: CartService, private orderByPipe: OrderByPipe) { }

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

    this.updateProductData.emit(productsData);
    this.cartService.removeProduct(product);

    if (!this.products.length) { this.isVisiblePopover = false; }
  }

  decreaseItemQty(product: ICartProductModel): void {
    const productsData: ICartProductModel[] = [];
    productsData.push(product);

    this.updateProductData.emit(productsData);
    this.cartService.decreaseQty(product);
  }

  increaseItemQty(product: ICartProductModel): void {
    const productsData: ICartProductModel[] = [];
    productsData.push(product);

    this.updateProductData.emit(productsData);
    this.cartService.increaseQty(product);
  }

  removeAllItems(): void {
    let removedProduts = this.cartService.removeAllProducts();
    removedProduts =  removedProduts.map((product: ICartProductModel): ICartProductModel => {
      return {...product, stockQty: product.stockQty + product.quantity};
    });

    this.isVisiblePopover = false;
    this.removeCartProducts.emit(removedProduts);
  }

  toglePopover(): void {
    this.isVisiblePopover = !this.isVisiblePopover;
  }
}
