import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list-component/product-list.component';
import { ProductComponent } from './product-component/product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule {
}
