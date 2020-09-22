import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from './cart/services/cart.service';

@Injectable({
    providedIn: 'root'
})

export class OrderGuard implements CanActivate{
    constructor(private cartService: CartService, private router: Router) { }

    private canActiveOrdersRoute(): any {
        if (this.cartService.getProductsCount()) {
            return true;
        } else {
            this.router.navigateByUrl('product-list');
        }
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActiveOrdersRoute();
    }
}
