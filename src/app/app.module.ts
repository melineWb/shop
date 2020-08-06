import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first.component';

import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ProductModule,
    CartModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
