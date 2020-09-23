import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductsService } from '../../../product/services/products.service';
import { OrderService } from '../../../order/services/order.service';
import { IProductModel } from '../../../product/models/iproduct-model';
import { IOrderModel } from '../../../order/models/iorder.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.less']
})
export class AdminDashboardComponent implements OnInit {
  products$: Observable<IProductModel[]>;
  orders: IOrderModel[];

  constructor(private productsService: ProductsService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
    this.orders = this.orderService.getOrders();
  }

  updateProductData(data: IProductModel[]): void {
    // this.products$.subscribe(products => {
    //   const cartProducts = products.map((product: IProductModel) => {
    //     const productObj = {...product};

    //     data.forEach((item): void => {
    //       if (productObj.id === item.id) {
    //         productObj.stockQty = item.stockQty;
    //       }
    //     });
    //     return productObj;
    //   });

    //   this.products$ = new Observable((observer) => {
    //       observer.next(cartProducts);
    //       observer.complete();
    //   });
    // });
  }

}
