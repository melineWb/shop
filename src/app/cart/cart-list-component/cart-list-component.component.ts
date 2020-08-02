import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart.service';
import { ICartProductModel } from '../icart-product-model';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.less']
})
export class CartListComponentComponent implements OnInit {
  totalPrice = 0;
  isVisiblePopover = false;
  products: ICartProductModel[];
  @Input() totalQty = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(): void{
    this.products = this.cartService.getProducts();

    const totalPrice = this.products.reduce((val: any, product: ICartProductModel) => {
      return val + product.price * product.quantity;
    }, 0);
    this.totalPrice = totalPrice.toFixed(2);
  }

  removeItem(product: ICartProductModel): void {
    this.totalQty -= product.quantity;

    this.cartService.removeProduct(product.id);
    this.getCartData();
  }

  toglePopover(): void {
    this.isVisiblePopover = !this.isVisiblePopover;
  }
}
