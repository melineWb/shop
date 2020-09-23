import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, CartComponent, OrderComponent, PathNotFoundComponent, ProductComponent } from './layout';
import { OrderGuard } from './order.guard';
import { AdminGuard } from './admin/admin.guard';
import { AdminComponent } from './admin/components/admin.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [OrderGuard]
  },
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard],
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
