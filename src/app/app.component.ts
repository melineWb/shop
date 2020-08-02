import { Component, Input, ViewChild } from '@angular/core';
import { CartListComponentComponent } from './cart/cart-list-component/cart-list-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'My shop';
  subtitle = 'You may also like';
  cartAddedQty = 0;

  @ViewChild(CartListComponentComponent)
  private cartListComponentComponent: CartListComponentComponent;


  updateCart(cartAddedQty: number): void {
    this.cartAddedQty += cartAddedQty;
    this.cartListComponentComponent.getCartData();
  }
}
