import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {
 private customerInfoFields: FormlyFieldConfig[];
  
 
  constructor() { }
  getFields(disabled) {


    this.customerInfoFields  = [
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
              expressionProperties: {
                'templateOptions.disabled': function(){if(disabled){return disabled} else return '' }
              }
          },
          {
            className: 'flex-1',
            type: 'select',
            key: 'ownership',
            templateOptions: {
              label: 'Ownership',
             
              required: true,
               options: [{code:'1',value:'Corporate'},{code:'2',value:'Single Propreitorship'}],
              labelProp: 'value',
              valueProp: 'code'
            }
            ,            
              expressionProperties: {
                'templateOptions.disabled': function(){if(disabled){return disabled} else return '' }
              }
          },
          {
            className: 'flex-1',
            type: 'datepicker',
            key: 'dtiRegDate',
            templateOptions: {
              label: 'Sec/DTI Registration Date',
             
              required: true
            },            
            expressionProperties: {
              'templateOptions.disabled': function(){if(disabled){return disabled} else return '' }
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
            },            
            expressionProperties: {
              'templateOptions.disabled': function(){if(disabled){return disabled} else return '' }
            }
          },
          {
            className: 'flex-1',
            type: 'input',
            key: 'customerNumber',
            templateOptions: {
              label: 'Customer Number',
             
              maxLength: 12
            },            
            expressionProperties: {
              'templateOptions.disabled': function(){if(disabled){return disabled} else return '' }
            }
          }
        ]
      }
    ];

    return this.customerInfoFields;
  }


}
