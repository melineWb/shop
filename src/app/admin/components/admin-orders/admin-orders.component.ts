import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../../../order/services/order.service';
import { IOrderModel } from '../../../order/models/iorder.model';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.less']
})
export class AdminOrdersComponent implements OnInit {
  orders: IOrderModel[];

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

  goBack(): void{
    this.router.navigateByUrl('/admin');
  }

}
