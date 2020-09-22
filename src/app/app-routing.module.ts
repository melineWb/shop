import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, CartComponent, OrderComponent, PathNotFoundComponent, ProductComponent } from './layout';
import { OrderGuard } from './order.guard';

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
