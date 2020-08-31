import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';

import { ICartProductModel } from '../cart/models/icart-product-model';
import { CartListComponent } from '../cart/cart-list-component/cart-list.component';
import { LocalStorageService } from '../core/services/local-storage.service';
import { ConstantsService } from '../core/services/constants.service';

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
    link: '/',
  }];

  @ViewChild(CartListComponent)
  private cartListComponent: CartListComponent;


  @Output() updateProductListData = new EventEmitter<ICartProductModel[]>();
  @Output() showInfoMsg = new EventEmitter<string>();
  @Output() triggerLoginModal = new EventEmitter<boolean>();

  constructor(
    private localStorageService: LocalStorageService,
    private constantsService: ConstantsService ) { }

  ngOnInit(): void {
    this.appName = this.constantsService.app;
  }

  // used to inform CardList component that we need update data in cart
  getDataFromCart(): void {
    return this.cartListComponent.getCartData();
  }

  removeCartProducts(data: ICartProductModel[]): void {
    this.updateProductListData.emit(data);
    this.showInfoMsg.emit('All items in the cart was successfully removed');
  }

  updateProductData(products: ICartProductModel[]): void {
    this.updateProductListData.emit(products);
  }

  openLoginModal(): void {
    this.triggerLoginModal.emit(true);
  }

  onLogout(): void {
    this.localStorageService.removeItem('username');
    this.username = null;
  }
}
