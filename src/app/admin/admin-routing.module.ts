import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './admin.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminAddProductsComponent } from './components/admin-add-products/admin-add-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminProductItemResolver } from './admin-product-item.resolver';

const adminRoutes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'products',
        component: AdminProductsComponent
      },
      {
        path: 'product/add',
        component: AdminAddProductsComponent
      },
      {
        path: 'product/edit/:id',
        component: AdminEditProductComponent,
        resolve: {product: AdminProductItemResolver}
      },
      {
        path: 'orders',
        component: AdminOrdersComponent
      },
      {
        path: '',
        component: AdminDashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
