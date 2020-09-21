import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';

import { ICartProductModel } from '../../../cart/models/icart-product-model';
import { CartListComponent } from '../../../cart/cart-list-component/cart-list.component';
import { ProductsService } from '../../../product/services/products.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ConstantsService } from '../../../core/services/constants.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})

export class HeaderComponent implements OnInit{
  @Input() username: string | null = null;
  appName: string;
  menu = [{
    name: 'Shop',
    link: 'product-list',
  }, {
    name: 'Cart',
    link: 'cart',
  }, {
    name: 'Order',
    link: 'order',
  }];

  @ViewChild(CartListComponent)

  @Output() showInfoMsg = new EventEmitter<string>();
  @Output() triggerLoginModal = new EventEmitter<boolean>();

  constructor(
    private localStorageService: LocalStorageService,
    private constantsService: ConstantsService,
    private productsService: ProductsService,
    private cartService: CartService ) { }

  ngOnInit(): void {
    this.appName = this.constantsService.app;
  }

  openLoginModal(): void {
    this.triggerLoginModal.emit(true);
  }

  onLogout(): void {
    this.localStorageService.removeItem('username');
    this.username = null;
  }
}
