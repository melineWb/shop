import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IProductModel } from '../../../product/models/iproduct-model';

@Component({
  selector: 'app-admin-dashboard-item',
  templateUrl: './admin-dashboard-item.component.html',
  styleUrls: ['./admin-dashboard-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardItemComponent {
  @Input() data: IProductModel;
  @Input() editable: boolean;
  @Input() showQty: boolean;
  @Output() editItem = new EventEmitter<IProductModel>();

  constructor() { }
}
