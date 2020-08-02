import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ProductComponentComponent } from './product/product-component/product-component.component';
import { ProductListComponentComponent } from './product/product-list-component/product-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CartListComponentComponent } from './cart/cart-list-component/cart-list-component.component';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartListComponentComponent
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
