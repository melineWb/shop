import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent, HomeComponent, CartComponent, OrderComponent, ProductComponent, PathNotFoundComponent } from './components';
import { ProductModule } from '../product/product.module';
import { CartModule } from '../cart/cart.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileModule } from '../profile/profile.module';


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    OrderComponent,
    ProductComponent,
    PathNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    ProductModule,
    CartModule,
    ProfileModule,
    AppRoutingModule,
  ],
  exports: [
    HomeComponent,
    CartComponent,
    OrderComponent,
    ProductComponent,
    PathNotFoundComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
