import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgOption } from '@ng-select/ng-select';
import { Router } from '@angular/router';

import { LocalStorageService } from '../../../core/services/local-storage.service';
import { CartService } from '../../../cart/services/cart.service';
import { ICartProductModel } from '../../../cart/models/icart-product-model';
import { ICartResultModel } from '../../../cart/models/icart-result-model';
import { OrderService } from '../../../order/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  totalPrice = 0;
  products: ICartProductModel[];
  totalQty = 0;
  selectedPayment = 'cash';
  paymentComplete = false;

  paymentItems: NgOption[] = [
    {
      name: 'Pay by cash',
      id: 'cash',
    }, {
      name: 'Pay by CreditCard',
      id: 'cc',
    }, {
      name: 'Pay by PayPal',
      id: 'paypal',
    }
  ];

  constructor(
    private cartService: CartService,
    private localStorageService: LocalStorageService,
    private orderService: OrderService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.cartService.data$.subscribe(res => this.getCartData(res));
  }

  private initForm(): void {
    this.orderForm = this.fb.group({
      name: [this.localStorageService.getItem('username'), [
          Validators.required
        ]
      ],
      phoneNumber: ['', [
          Validators.required
        ]
      ],
      country: ['Ukraine', [
          Validators.required,
        ]
      ],
      city: ['', [
          Validators.required,
        ],
      ],
      street: ['', [
          Validators.required,
        ],
      ],
      appartments: ['', [
          Validators.required,
        ],
      ]
    });
  }

  // used In Header Component for update cart Qty
  getCartData(res: ICartResultModel): void {
    this.products = res.cartProducts;
    this.totalPrice = res.totalSum;
    this.totalQty = res.totalQuantity;
  }

  onSubmit(): void {
    const controls = this.orderForm.controls;

    if (this.orderForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    const addressData = {
      country: this.orderForm.value.country,
      city: this.orderForm.value.city,
      street: this.orderForm.value.street,
      appartments: this.orderForm.value.appartments,
    };

    const data = {
      username: this.orderForm.value.name,
      phone: this.orderForm.value.phone,
      paymentType: this.selectedPayment,
      paymentComplete: this.paymentComplete,
      address: addressData,
      products: this.products,
      totalPrice: this.totalPrice,
      closed: false,
    };

    this.orderService.placeOrder(data);
    this.orderForm.reset();
    this.cartService.removeAllProducts(true);
    this.router.navigateByUrl('cart');
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.orderForm.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  changePaymentMethod(): void {
    this.paymentComplete = this.selectedPayment === 'cash' ? false : true;
  }
}
