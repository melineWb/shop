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

  // сложно понять, где этот метод используется без поиска его в проекте
  // желательно какой-то комментарий оставить о применении метода
  getDataFromCart(): void {
    return this.cartListComponent.getCartData();
  }

  updateProductData(product: ICartProductModel): void {
    this.updateProductListData.emit(product);
  }
}
