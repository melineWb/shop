import { Component, Input, ViewChild } from '@angular/core';

import { CartListComponent } from './cart/cart-list-component/cart-list.component';
import { ICartProductModel } from './cart/models/icart-product-model';
import { ProductListComponent } from './product/product-list-component/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(CartListComponent)
  private cartListComponent: CartListComponent;

  @ViewChild(ProductListComponent)
  private productListComponent: ProductListComponent;

  title = 'My shop';
  subtitle = 'You may also like';

  updateCart(): void {
    this.cartListComponent.getCartData();
  }

  updateProductData(product: ICartProductModel): void {
    this.productListComponent.updateProductData(product);
  }
}
