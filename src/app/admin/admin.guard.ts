import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild,
    CanLoad,
    UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LocalStorageService } from '../core/services/local-storage.service';

@Injectable({
    providedIn: 'root'
})

export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private localStorageService: LocalStorageService, private router: Router) { }

    private canActiveAdminsRoute(): any {
        if (this.localStorageService.getItem('name') === 'admin') {
            return true;
        } else {
            this.router.navigateByUrl('404');
            return false;
        }
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActiveAdminsRoute();
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActiveAdminsRoute();
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        console.log('CanLoad Guard is called');
        const url = `/${route.path}`;
        return this.canActiveAdminsRoute();
    }
}
