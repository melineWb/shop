import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProductModel } from '../../../product/models/iproduct-model';
import { ProductsService } from '../../../product//services/products.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.less']
})
export class AdminEditProductComponent implements OnInit {
  data: IProductModel;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) { }

    ngOnInit(): void {
      this.data = this.route.snapshot.data.product;
      this.id = this.data.id;
    }

    goBack(): void {
      this.router.navigateByUrl('/admin/products');
    }

    onSaveProduct(product: IProductModel): void {
      this.productsService.updateProduct(product);
      this.goBack();
    }

}
