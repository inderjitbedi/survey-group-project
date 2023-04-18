import {Component, OnInit} from '@angular/core';
import {apiConstants} from "../../../providers/api.constants";
import {Constants} from "../../../providers/constant";
import {CommonAPIService} from "../../../providers/api.service";
import {Router} from "@angular/router";
import {ErrorHandlingService} from "../../../providers/error-handling.service";
import {AlertService} from "../../../providers/alert.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  messages: string[] = [];
  username: string = '';
  password: string = '';
  email: string = '';
  displayname: string = '';

  constructor(
    private apiService: CommonAPIService,
    private router: Router,
    private errorHandlingService: ErrorHandlingService,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.username && this.password && this.email && this.displayname) {
      this.apiService
        .post(
          apiConstants.register,
          {
            username: this.username,
            password: this.password,
            email: this.email,
            displayname: this.displayname,
          }
        )
        .subscribe({
          next: (data) => {
            if (data.statusCode === 200) {
              this.alertService.notify(data.msg);
              this.router.navigate([Constants.Pages.LOGIN]);
            } else {
              this.errorHandlingService.handle(data.msg);
            }
          },
          error: (e) => {
            this.errorHandlingService.handle(e)
          },
        });
    }
  }
}
