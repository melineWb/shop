import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IProductModel } from '../../../product/models/iproduct-model';

@Component({
  selector: 'app-admin-dashboard-item',
  templateUrl: './admin-dashboard-item.component.html',
  styleUrls: ['./admin-dashboard-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardItemComponent implements OnInit {
  @Input() data: IProductModel;
  @Output() editItem = new EventEmitter<IProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
