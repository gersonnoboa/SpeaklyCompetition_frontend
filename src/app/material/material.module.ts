import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 

@NgModule({
    imports: [
      CommonModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatInputModule,
      MatFormFieldModule,
      MatSnackBarModule
    ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatInputModule,
      MatFormFieldModule,
      MatSnackBarModule
    ],
    declarations: []
  })
export class MaterialModule { }