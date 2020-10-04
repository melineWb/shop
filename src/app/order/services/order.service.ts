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

  // не очень понятно почему этот метод возвращает не объект, а массив, может find использовать?
  getOrderById(id: number): IOrderModel[] {
    return this.orders.map((item: IOrderModel): IOrderModel => {
      if (id === item.id) {
        return item;
      }
    });
  }

  removeOrder(id: number): void {
    this.orders = [];

    this.orders.map((item: IOrderModel, index: number) => {
      if (id === item.id) {
        this.orders.splice(index, 1);
      }
    });
  }

  // этот мето не понятен
  // если orders это массив, то map возвращает новый массив, но вы его никак не используете
  // в первоначальном массиве orders ничего не изменится
  updateOrder(data: IOrderModel): void {
    this.orders.map((item: IOrderModel): IOrderModel => {
      if (data.id === item.id) {
        return data;
      } else {
        return item;
      }
    });
  }
}
