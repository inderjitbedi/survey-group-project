import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';


const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatInputModule,
  MatDividerModule, 
  MatTableModule,
  MatDialogModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  MatProgressSpinnerModule,
  MatSidenavModule, 
  MatToolbarModule,
  MatTooltipModule
];
@NgModule({
  imports: [modules],
  providers:[MatDialog],
  exports: [modules],
})
export class MaterialModule {}
