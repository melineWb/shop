import { Injectable } from '@angular/core';

import { IOrderModel } from '../models/iorder.model';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private orders: IOrderModel[] = [];

  constructor() {}

  placeOrder(order: IOrderModel): void {
    order.id = this.orders.length;
    this.orders.unshift(order);
  }

  getOrders(): IOrderModel[] {
    return this.orders;
  }

  getOrderById(id: number): IOrderModel {
    return this.orders.find((item: IOrderModel): IOrderModel => {
      if (item.id === id) {
        return item;
      }
    });
  }

  // updateOrder & removeOrder removed as unused methods
}
