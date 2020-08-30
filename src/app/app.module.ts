import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { ProfileModule } from './profile/profile.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ProductModule,
    CartModule,
    ProfileModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
