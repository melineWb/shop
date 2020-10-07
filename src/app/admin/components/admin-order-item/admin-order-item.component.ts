import { Component, OnInit, Input } from '@angular/core';
import { IOrderModel } from '../../../order/models/iorder.model';

@Component({
  selector: 'app-admin-order-item',
  templateUrl: './admin-order-item.component.html',
  styleUrls: ['./admin-order-item.component.less']
})
export class AdminOrderItemComponent implements OnInit {
  @Input() data: IOrderModel;
  @Input() hideLink: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
