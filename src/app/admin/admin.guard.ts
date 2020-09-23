import {
    CanActivate,
    Router,
    CanActivateChild,
    CanLoad,
    UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { LocalStorageService } from '../core/services/local-storage.service';

@Injectable({
    providedIn: 'root'
})

export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private localStorageService: LocalStorageService, private router: Router) { }

    private canActiveAdminsRoute(): boolean | UrlTree {
        return this.localStorageService.getItem('username') === 'admin' ? true : this.router.parseUrl('404');
    }

    canActivate(): boolean | UrlTree {
        return this.canActiveAdminsRoute();
    }

    canActivateChild(): boolean | UrlTree {
        return this.canActiveAdminsRoute();
    }

    canLoad(): boolean | UrlTree  {
        return this.canActiveAdminsRoute();
    }
}
