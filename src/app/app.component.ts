import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';

import { ICartProductModel } from './cart/models/icart-product-model';
import { ProductListComponent } from './product/product-list-component/product-list.component';
import { HeaderComponent } from './header/header.component';
import { InfoMsgBoxComponent } from './shared/components/info-msg-box/info-msg-box.component';
import { ModalLoginComponent } from './profile/components/modal-login/modal-login.component';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, AfterViewInit{
  username: string | object = null;
  
  @ViewChild(HeaderComponent) private headerComponent: HeaderComponent;
  @ViewChild(ProductListComponent) private productListComponent: ProductListComponent;
  @ViewChild(InfoMsgBoxComponent) private infoMsgBoxComponent: InfoMsgBoxComponent;
  @ViewChild(ModalLoginComponent) private modalLoginComponent: ModalLoginComponent;
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor( private localStorageService: LocalStorageService ) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  private isLoggedIn(): void {
    if (this.localStorageService) {
      this.username = this.localStorageService.getItem('username');
    }
  }

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerText = 'Shop';
  }

  updateCart(qty: number): void {
    const cartQtyItems = this.headerComponent.getDataFromCart();
    this.infoMsgBoxComponent.showMsg(`${qty} item(s) added to cart`);
  }

  showInfoMsg(msg: string): void {
    this.infoMsgBoxComponent.showMsg(msg);
  }

  updateProductListData(product: ICartProductModel): void {
    this.productListComponent.updateProductData(product);
  }

  triggerLoginModal(flag: boolean): void {
    this.modalLoginComponent.togleModal(flag);
  }

  onUserLoggedIn(name: string): void {
    this.username = name;
  }
}
