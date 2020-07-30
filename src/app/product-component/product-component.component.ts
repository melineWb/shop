import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category.enum';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.less']
})
export class ProductComponentComponent{

  @Input() name: string;
  @Input() imgSrc: string;
  @Input() description: string;
  @Input() price: number;
  @Input() category: Category = Category.All;
  @Input() isAvailabile: boolean;
  @Input() tags: string[];

  constructor() { }

  onBuy = (): void => {
    console.log('The item successfully added');
  }
}
