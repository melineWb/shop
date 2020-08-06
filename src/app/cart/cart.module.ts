import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartListComponent } from './cart-list-component/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
