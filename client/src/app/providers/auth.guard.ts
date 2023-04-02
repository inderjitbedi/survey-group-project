import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from './constant';
import { AlertService } from './alert.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    public alertService: AlertService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (!localStorage.getItem('auth_token')) {
      if (url.indexOf('login') === -1) {
        this.router.navigate([Constants.Pages.LOGIN]);
        return false;
      } else {
        return true;
      }
    } else {
      if (url.indexOf('login') > -1) {
        this.router.navigate([Constants.Pages.DASHBOARD]);
        return false;
      }
    }
    return true;
  }

  isAuthenticated(): void {
    if (localStorage.getItem('auth_token')) {
      this.router.navigate([Constants.Pages.DASHBOARD]);
    } else {
      this.router.navigate([Constants.Pages.LOGIN]);
    }
  }

  logout(): void {
    this.clearAll();
  }

  sessionExpired(): void {
    this.clearAll();
    this.alertService.notify(Constants.ErrorMessages.sessionExpired);
  }

  clearAll(): void {
    this.router.navigate([Constants.Pages.LOGIN]);
    localStorage.removeItem('auth_token');
  }
}
