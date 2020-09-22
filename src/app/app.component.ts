import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { InfoMsgBoxComponent } from './shared/components/info-msg-box/info-msg-box.component';
import { ModalLoginComponent } from './profile/components/modal-login/modal-login.component';
import { LocalStorageService } from './core/services/local-storage.service';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit{
  username: string | object = null;

  @ViewChild(InfoMsgBoxComponent) private infoMsgBoxComponent: InfoMsgBoxComponent;
  @ViewChild(ModalLoginComponent) private modalLoginComponent: ModalLoginComponent;
  @ViewChild(RouterOutlet, { static: true }) outlet;

  constructor( private localStorageService: LocalStorageService, private cartService: CartService ) { }

  ngOnInit(): void {
    this.isLoggedIn();
    this.cartService.data$.subscribe(res => this.updateCartQty(res.msg));
  }

  private isLoggedIn(): void {
    if (this.localStorageService) {
      this.username = this.localStorageService.getItem('username');
    }
  }

  showInfoMsg(msg: string): void {
    this.infoMsgBoxComponent.showMsg(msg);
  }

  triggerLoginModal(flag: boolean): void {
    this.modalLoginComponent.togleModal(flag);
  }

  userLoggedIn(name: string): void {
    this.username = name;
  }

  updateCartQty(msg: string): void {
    if (msg) {
      this.infoMsgBoxComponent.showMsg(msg);
    }
  }

  onActivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet): void {
      console.log('Deactivated Component', $event, routerOutlet);
  }
}
