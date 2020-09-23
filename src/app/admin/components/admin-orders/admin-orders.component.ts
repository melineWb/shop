import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { OrderService } from '../../../order/services/order.service';
import { IOrderModel } from '../../../order/models/iorder.model';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.less']
})
export class AdminOrdersComponent implements OnInit {
  orders: IOrderModel[];

  constructor(private location: Location, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

  goBack(): void{
    this.location.back();
  }

}
