import { Component, Input, ViewChild } from '@angular/core';

import { CartListComponent } from './cart/cart-list-component/cart-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(CartListComponent)
  private cartListComponent: CartListComponent;

  title = 'My shop';
  subtitle = 'You may also like';

  updateCart(cartAddedQty: number): void {
    this.cartListComponent.getCartData();
  }
}
