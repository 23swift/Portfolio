import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material';
import {AddOwnershipDialog}from './app-add-ownership-dialog/add-ownership-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
 
];

@Component({
  selector: 'app-ownership-list',
  templateUrl: './ownership-list.component.html',
  styleUrls: ['./ownership-list.component.css']
})
export class OwnershipListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
 
  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    this._dialog.open(AddOwnershipDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

