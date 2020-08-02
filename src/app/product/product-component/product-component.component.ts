import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../category.enum';
import { IProductModel } from '../iproduct-model';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.less']
})
export class ProductComponentComponent implements OnInit, IProductModel {

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

  private checkAvailability(): void {
    if (this.stockQty === 0) {
      this.isAvailabile = false;
    }
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
}
