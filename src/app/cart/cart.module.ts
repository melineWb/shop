import { NgModule } from '@angular/core';

import { CartListComponent } from './cart-list-component/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartRowComponent } from './cart-row/cart-row.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartRowComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    CartListComponent,
    CartRowComponent
  ]
})
export class CartModule { }
