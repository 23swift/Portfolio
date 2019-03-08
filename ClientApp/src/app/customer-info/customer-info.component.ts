import { Component, OnInit,NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import {CustomerInfoService} from './customer-info.service'
import{CustomerInfo} from './customer-info.class';
import { from } from 'rxjs';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  customerInfoForm = new FormGroup({});
  customerInfo: CustomerInfo= new CustomerInfo();
  
  options: FormlyFormOptions  = {
    formState: {
      style:"color:red",
      readOnly: false
    }
  };;
  submitted = false;
  constructor(private _service:CustomerInfoService) { }
  customerInfoFields: FormlyFieldConfig[];
  ngOnInit() {
    this.customerInfo.owners=[];
    // this.customerInfo.owners= [
    //   {Id: 1, name: 'Hydrogen', percentOfOwnership: 1.0079, typeOfRelatedParty: 'H',remarks:'Test'},
    //   {Id: 2, name: 'Helium', percentOfOwnership: 4.0026, typeOfRelatedParty: 'He',remarks:'Test'},
    //   {Id: 3, name: 'Lithium', percentOfOwnership: 6.941, typeOfRelatedParty: 'Li',remarks:'Test'},
      
     
    // ];
    this.customerInfoFields=this._service.getFields(this.submitted);
  }
  
  
  
    onSubmit(customerInfo) {
     
      // customerInfo.detail=[{'name':'Arnold Costamero','address':'Manila'}];
      this.submitted=true;
      
      console.log(customerInfo);
      this.customerInfoFields=this._service.getFields(this.submitted);

    }
    onUpdate(){
      this.submitted=false;
      this.customerInfoFields=this._service.getFields('');
      
      console.log(this.submitted);
      // console.log(this.customerInfoFields);

    }

   
}
