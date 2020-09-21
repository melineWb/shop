import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';

import { ICartProductModel } from '../../../cart/models/icart-product-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  @Output() updateCartQty = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerText = 'Shop';
  }
}

