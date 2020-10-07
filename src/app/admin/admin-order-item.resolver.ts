import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import {IOrderModel} from '../order/models/iorder.model';
import {OrderService} from '../order/services/order.service';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderItemResolver implements Resolve<IOrderModel> {

  constructor(private orderService: OrderService) { }

  resolve(route: ActivatedRouteSnapshot): IOrderModel {
    return this.orderService.getOrderById(+ route.paramMap.get('id'));
  }
}
