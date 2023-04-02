import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class AlertService {

    closeName = 'End Now';
    config: MatSnackBarConfig = { duration: 5000, horizontalPosition: 'right', verticalPosition: 'top' };
    constructor(
        private snackbar: MatSnackBar
        ) { }

    notify(message: string, buttonName = this.closeName,
         config = this.config
         ): void {
        this.snackbar.open(message, buttonName, config);
    }
}
