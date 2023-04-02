import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { of as throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    public authGuard: AuthGuard,
    private errorHandlingService: ErrorHandlingService
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    let newReq = request;
    const access_token = localStorage.getItem('auth_token');
    if (access_token) {
      newReq = request.clone({
        setHeaders: { Authorization: `Bearer ${access_token}` },
      });
    }
    return next.handle(newReq).pipe(
      catchError((error: any) => {
        this.errorHandlingService.handle(error);
        return throwError(error);
      })
    );
  }
}
