import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

import { ICartProductModel } from '../cart/models/icart-product-model';
import { CartListComponent } from '../cart/cart-list-component/cart-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  @ViewChild(CartListComponent)
  private cartListComponent: CartListComponent;

  @Output() updateProductListData = new EventEmitter<ICartProductModel>();

  constructor() { }

  // used in App Component to show msg how many Qty was added into cart
  getDataFromCart(): void {
    return this.cartListComponent.getCartData();
  }

  updateProductData(product: ICartProductModel): void {
    this.updateProductListData.emit(product);
  }
}
