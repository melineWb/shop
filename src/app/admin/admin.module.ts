import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CartModule } from '../cart/cart.module';
import { AdminComponent } from './components/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardItemComponent } from './components/admin-dashboard-item/admin-dashboard-item.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminAddProductsComponent } from './components/admin-add-products/admin-add-products.component';
import { AdminProductsFormComponent } from './components/admin-products-form/admin-products-form.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminOrderItemComponent } from './components/admin-order-item/admin-order-item.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';

const adminComponents = [
  AdminComponent,
  AdminDashboardComponent,
  AdminDashboardItemComponent,
  AdminProductsComponent,
  AdminProductsFormComponent,
  AdminAddProductsComponent,
  AdminOrdersComponent,
  AdminOrderItemComponent,
  AdminEditProductComponent,
  AdminOrderComponent
];

@NgModule({
  declarations: adminComponents,
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  exports: adminComponents
})
export class AdminModule { }
