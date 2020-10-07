import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IOrderModel } from '../../../order/models/iorder.model';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.less']
})
export class AdminOrderComponent implements OnInit {
  data: IOrderModel;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data.order;
    console.log(this.data);
  }

  goBack(): void {
    this.router.navigateByUrl('/admin/orders');
  }
}
