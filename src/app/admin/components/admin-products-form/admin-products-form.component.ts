import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { NgOption } from '@ng-select/ng-select';

import { IProductModel } from '../../../product/models/iproduct-model';
import { Category } from '../../../shared/category.enum';

@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminProductsFormComponent implements OnInit {
  @Input() data: IProductModel;
  @Output() saveProduct = new EventEmitter<IProductModel>();
  productForm: FormGroup;

  category: Category = Category.All;

  categoryItems: NgOption[] = [
    {
      id: Category.All,
    }, {
      id: Category.Capacitor,
    }, {
      id: Category.Chip,
    }, {
      id: Category.LED,
    }, {
      id: Category.Resistor,
    }
  ];

  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.category = this.data.category;
    this.initForm();
  }

  private initForm(): void {
    this.productForm = this.fb.group({
      name: this.data.name,
      imgSrc: this.data.imgSrc,
      price: this.data.price,
      description: this.data.description,
      isAvailabile: this.data.isAvailabile,
      stockQty: this.data.stockQty
    });
  }

  goBack(): void{
    this.location.back();
  }

  onSubmit(): void {
    const defaultImgSrc = 'https://watchesmaster.ru/img/placeholder.png';

    const product = {...this.data};
    product.name = this.productForm.value.name;
    product.imgSrc = this.productForm.value.imgSrc || defaultImgSrc;
    product.price = this.productForm.value.price;
    product.description = this.productForm.value.description;
    product.isAvailabile = this.productForm.value.isAvailabile;
    product.stockQty = this.productForm.value.stockQty;
    product.category = this.category;

    this.saveProduct.emit(product);
    this.goBack();
  }
}
