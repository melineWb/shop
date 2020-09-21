import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductListComponent } from '../../../product/product-list-component/product-list.component';
import { ICartProductModel } from '../../../cart/models/icart-product-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;
  @ViewChild(ProductListComponent) private productListComponent: ProductListComponent;

  @Output() updateCartQty = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerText = 'Shop';
  }

  // updateCart(qty: number): void {
  //   console.log('updateCartQty');
  //   this.updateCartQty.emit(qty);
  // }

  onUpdateProductData(products: ICartProductModel[]): void {
    this.productListComponent.updateProductData(products);
  }

}

