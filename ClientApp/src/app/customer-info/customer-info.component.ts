import { Component, OnInit,NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  customerInfoForm = new FormGroup({});
  customerInfo: any = {};
  options: FormlyFormOptions = {};
  constructor() { }

  ngOnInit() {
  }
  customerInfoFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'legalName',
          templateOptions: {
            label: 'Business/Legal Name',
            placeholder: 'Business Name',
            required: true,
            maxLength: 50
          },
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'ownership',
          templateOptions: {
            label: 'Ownership',
            required: true,
            // options: this._dropDownService.getDropdown('OW'),
            labelProp: 'value',
            valueProp: 'code'
          }
        },
        {
          className: 'flex-1',
          type: 'datepicker',
          key: 'dtiRegDate',
          templateOptions: {
            label: 'Sec/DTI Registration Date',
            required: true
          }
        }
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'registeredBusinessNumber',
          templateOptions: {
            label: 'Registered Business Number',
            maxLength: 11
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'customerNumber',
          templateOptions: {
            label: 'Customer Number',
            maxLength: 12
          }
        }
      ]
    }
  ];
  
  
    onSubmit(orderInfo) {
      console.log(orderInfo);
    }
}
