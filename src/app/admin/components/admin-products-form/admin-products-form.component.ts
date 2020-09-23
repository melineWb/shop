import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { IProductModel } from '../../../product/models/iproduct-model';

@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.less']
})
export class AdminProductsFormComponent implements OnInit {
  @Input() data: IProductModel;
  @Output() saveProduct = new EventEmitter<IProductModel>();
  productForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.productForm = this.fb.group({
      name: this.data.name,
      imgSrc: this.data.imgSrc,
      price: this.data.price,
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

    this.saveProduct.emit(product);
  }
}
