import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './layout/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
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
