import { NgModule } from '@angular/core';

import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,MatCardModule, 
  MatTableModule,
  MatStepperModule,
  MatMenuModule,
  MatToolbarModule,
  MatDialogModule
 
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    FormlyMatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatStepperModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule
    
    
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    // MatDatepickerModule,
    // MatNativeDateModule
    FormlyMatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatStepperModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule
    
    
  ]
})
export class MaterialModule {}