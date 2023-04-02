import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

const routes = [{ path: '**', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,MaterialModule,
    MatFormFieldModule,FormsModule, ReactiveFormsModule
  ],
})
export class LoginModule {}
