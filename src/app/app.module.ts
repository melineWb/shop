import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first.component';
import { ProductComponent } from './product/product-component/product.component';
import { ProductListComponent } from './product/product-list-component/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CartListComponent } from './cart/cart-list-component/cart-list.component';
import { ProductsService } from './product/services/products.service';
import { CartService } from './cart/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    ProductsService,
    CartService
  ]
})
export class AppModule { }
