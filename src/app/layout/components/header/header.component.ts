import { Component, Input, Output, EventEmitter, ViewChild, OnInit, OnChanges } from '@angular/core';

import { CartListComponent } from '../../../cart/cart-list-component/cart-list.component';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ConstantsService } from '../../../core/services/constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})

export class HeaderComponent implements OnInit, OnChanges {
  @Input() username: string | null = null;
  appName: string;
  menu = [{
    name: 'Shop',
    link: 'product-list',
  }, {
    name: 'Cart',
    link: 'cart',
  }];

  @ViewChild(CartListComponent)

  @Output() showInfoMsg = new EventEmitter<string>();
  @Output() triggerLoginModal = new EventEmitter<boolean>();

  constructor(
    private localStorageService: LocalStorageService,
    private constantsService: ConstantsService) { }

  ngOnInit(): void {
    this.appName = this.constantsService.app;
  }

  ngOnChanges(): void {
    if (this.username === 'admin') {
      this.menu.push({
        name: 'Admin',
        link: 'admin',
      });
    }
  }

  openLoginModal(): void {
    this.triggerLoginModal.emit(true);
  }

  onLogout(): void {
    this.localStorageService.removeItem('username');
    if (this.username === 'admin') {
      this.menu.pop();
    }

    this.username = null;
  }
}
