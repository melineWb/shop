import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.less']
})
export class CartListComponentComponent implements OnInit {
  totalQty: number = 0;
  totalPrice: number = 0;
  isVisiblePopover: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toglePopover = (): void => {
    this.isVisiblePopover = !this.isVisiblePopover;
  }

}
