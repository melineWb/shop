import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../shared/category.enum';
import { IProductModel } from '../models/iproduct-model';
import { CartService } from '../../cart/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit, IProductModel {

  @Input() id: string;
  @Input() name: string;
  @Input() imgSrc: string;
  @Input() description: string;
  @Input() price: number;
  @Input() category: Category = Category.All;
  @Input() tags: string[];
  @Input() stockQty: number;
  @Input() isAvailabile: boolean;
  @Input() cartAddedQty = 1;

  @Output() addToCart = new EventEmitter<number>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.checkAvailability();
  }

  onBuy(): void {
    this.stockQty -= 1;
    this.cartService.addProduct({
      id: this.id,
      name: this.name,
      imgSrc: this.imgSrc,
      price: this.price,
      quantity: this.cartAddedQty
    });

    this.addToCart.emit(this.cartAddedQty);

    console.log('The item successfully added');
    this.checkAvailability();
  }

  private checkAvailability(): void {
    if (this.stockQty === 0) {
      this.isAvailabile = false;
    }
  }
}
