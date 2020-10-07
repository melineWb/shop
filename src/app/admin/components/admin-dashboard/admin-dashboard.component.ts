import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductsService } from '../../../product/services/products.service';
import { OrderService } from '../../../order/services/order.service';
import { IProductModel } from '../../../product/models/iproduct-model';
import { IOrderModel } from '../../../order/models/iorder.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.less']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  private sub: any;
  products: IProductModel[];
  orders: IOrderModel[];

  constructor(private productsService: ProductsService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.sub = this.productsService.products$.subscribe(data => this.products = data);
    this.orders = this.orderService.getOrders();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
