import { CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { CartService } from './cart/services/cart.service';

@Injectable({
    providedIn: 'root'
})

export class OrderGuard implements CanActivate{
    constructor(private cartService: CartService, private router: Router) { }

    private canActiveOrdersRoute(): boolean | UrlTree {
        return this.cartService.getProducts() ? true : this.router.parseUrl('cart');
    }

    canActivate(): boolean | UrlTree {
        return this.canActiveOrdersRoute();
    }
}
