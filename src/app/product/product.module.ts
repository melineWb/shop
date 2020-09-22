import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list-component/product-list.component';
import { ProductComponent } from './product-component/product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule {
}
