import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  apiCounter = 0;
  timeoutInstance: any;
  loaderActive = false;
  constructor(private loaderService: LoaderService) {}
  // add urls which doesn't require loadering
  urlsDontNeedLoader = [];
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.urlsDontNeedLoader.find((url) => req.url.indexOf(url) > -1)) {
      this.apiCounter += 1;
      if (!this.timeoutInstance) {
        this.timeoutInstance = setTimeout(() => {
          this.loaderService.show(true);
          this.loaderActive = true;
        }, 1000);
      }
    }
    return next.handle(req).pipe(
      finalize(() => {
        if (!this.urlsDontNeedLoader.find((url) => req.url.indexOf(url) > -1)) {
          this.apiCounter -= 1;
          if (!this.apiCounter && this.loaderActive) {
            this.loaderService.show(false);
            this.loaderActive = false;
          }
          clearTimeout(this.timeoutInstance);
          this.timeoutInstance = null;
        }
      })
    );
  }
}
