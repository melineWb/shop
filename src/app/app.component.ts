import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ICartProductModel } from './cart/models/icart-product-model';
import { ProductListComponent } from './product/product-list-component/product-list.component';
import { HeaderComponent } from './header/header.component';
import { InfoMsgBoxComponent } from './shared/info-msg-box/info-msg-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(HeaderComponent)
  private headerComponent: HeaderComponent;

  @ViewChild(ProductListComponent)
  private productListComponent: ProductListComponent;

  @ViewChild(InfoMsgBoxComponent)
  private infoMsgBoxComponent: InfoMsgBoxComponent;

  @ViewChild('appTitle') appTitle: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this);
    this.appTitle.nativeElement.innerText = 'Shop';
  }

  updateCart(qty: number): void {
    const cartQtyItems = this.headerComponent.getDataFromCart();
    this.infoMsgBoxComponent.showMsg(`${qty} item(s) added to cart`);
  }

  updateProductListData(product: ICartProductModel): void {
    this.productListComponent.updateProductData(product);
  }
}
