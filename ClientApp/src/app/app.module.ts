import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NewAffiliationComponent } from './new-affiliation/new-affiliation.component';
import{MaterialModule} from './MaterialModule ';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnershipListComponent } from './ownership-list/ownership-list.component';
import { SignatoriesListComponent } from './signatories-list/signatories-list.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import {AddOwnershipDialog} from './ownership-list/app-add-ownership-dialog/add-ownership-dialog.component';

export function showErrorOption(field) {
  return (field.formState.submitted || field.formControl.touched ||
    (field.field.validation && field.field.validation.show)) && !field.formControl.valid;
}
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NewAffiliationComponent,
    CustomerInfoComponent,
    OwnershipListComponent,
    SignatoriesListComponent,
    BranchListComponent,
    AddOwnershipDialog
   
    
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FlexLayoutModule,
    FormlyModule.forRoot(
      {
          
        validationMessages: [
          { name: 'required', message: (err, field) => field.templateOptions.label + ' is required' },
          // { name: 'minlength', message: minlengthValidationMessage },
          // { name: 'maxlength', message: maxlengthValidationMessage },
          // { name: 'min', message: minValidationMessage },
          // { name: 'max', message: maxValidationMessage },
           { name: 'pattern', message: (err, field) => field.templateOptions.label + ' is not in correct format' },
          
           { name: 'other', message: (err, field) => err },
        ]
      }
    ),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    MaterialModule,
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'new-aff', component: NewAffiliationComponent },
      
    ])
  ],
  entryComponents: [AddOwnershipDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
