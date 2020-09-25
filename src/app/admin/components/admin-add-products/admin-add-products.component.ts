import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Location } from '@angular/common';

import { IProductModel } from '../../../product/models/iproduct-model';
import { ProductsService } from '../../../product//services/products.service';
import { Category } from '../../../shared/category.enum';
import { GeneratorService } from '../../../core/services/generator.service';
import { GeneratorDataService, GeneratorFactory } from '../../../core/services/generator.factory';

@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.less'],
  providers: [
    GeneratorService,
    {provide: GeneratorDataService, useFactory: GeneratorFactory(10), deps: [GeneratorService]}
  ]
})
export class AdminAddProductsComponent implements OnInit {
  newData: IProductModel;

  constructor(
    private location: Location,
    private productsService: ProductsService,
    @Optional() @Inject(GeneratorDataService) private generatorDataService: string) { }

  ngOnInit(): void {
    const idEl = this.generatorDataService ? this.generatorDataService : 'id';
    this.newData = {
      id: idEl,
      name: '',
      stockQty: 0,
      category: Category.All,
      isAvailabile: false,
    };
  }

  goBack(): void {
    this.location.back();
  }

  onSaveProduct(product: IProductModel): void {
    this.productsService.addProduct(product);
  }
}
