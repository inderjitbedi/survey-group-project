import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { AuthGuard } from './auth.guard';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlingService {

    constructor(public alertService: AlertService, private authGuard: AuthGuard) { }

    handle(error:any): void {
        if (error && error?.error?.statusCode === 401) {
            this.authGuard.sessionExpired();
        } else if (typeof error === 'string') {
            this.alertService.notify(error);
        } else {
            this.alertService.notify(error.error && error.error.message ?
                error.error.message : (error && error.message ? error.message : ('Server not responding. Please try later.')));
        }
    }
}
