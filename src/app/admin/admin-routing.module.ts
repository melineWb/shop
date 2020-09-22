import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard]
  },
  {
    path: 'orders',
    component: AdminComponent,
  },
  {
    path: 'products',
    component: AdminComponent,
  },
  {
    path: 'order/:id',
    component: AdminComponent,
  },
  {
    path: 'product/:id',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
