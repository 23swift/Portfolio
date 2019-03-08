import { Component,Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import {Owner} from '../../customer-info/customer-info.class';
export interface DialogData {
    animal: 'panda' | 'unicorn' | 'lion';
  }
@Component({
    selector: 'app-add-ownership-dialog',
    templateUrl: './add-ownership-dialog.html',
  })
  export class AddOwnershipDialog {
    form: FormGroup;
    fields: FormlyFieldConfig[]= [
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            {
              className: 'flex-1',
              type: 'input',
              key: 'name',
              templateOptions: {
                label: 'Name',
                maxLength: 50,
                required:true
              }
            },
            {
              className: 'flex-1',
              type: 'input',
              key: 'percentOfOwnership',
              templateOptions: {
                label: '% of Ownership(0.00)',
                pattern: '^\\d{1,2}$|100',
                patternValidationMessage: '"Needs to match " + options.templateOptions.pattern'
              }

              
            }
          ]
        },
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            {
              className: 'flex-1',
              type: 'select',
              key: 'typeOfRelatedParty',
              defaultValue: 'N/A',
              templateOptions: {
                label: 'Type of Related Party',
                options: [{code:1,value:'Owner'}],
                labelProp: 'value',
                valueProp: 'code',
              }
            },
            {
              className: 'flex-1',
              type: 'input',
              key: 'remarks',
              expressionProperties: {
                'templateOptions.required': (model: any, formState: any) => {
                  return model['typeOfRelatedParty'] !== 'N/A';
                }
              },
              templateOptions: {
                label: 'Remarks',
                maxLength: 120
              }
            }
          ]
        }
      ];
    model: Owner = new Owner();
    options: FormlyFormOptions = {
      showError: () => {
        return false;
      }
    };


    constructor(@Inject(MAT_DIALOG_DATA) public data: Owner,private _modalRef: MatDialogRef<AddOwnershipDialog>) {}
    ngOnInit() {
        this.form = new FormGroup({});
    }
    onAddOwner(customerInfo) {
     
      // customerInfo.detail=[{'name':'Arnold Costamero','address':'Manila'}];
      
      console.log(customerInfo);
      this._modalRef.close();
      

    }
    cancel() {
        this._modalRef.close();
        
      }
  }