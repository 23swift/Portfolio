import { Component,Inject, OnInit, Input } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatTableDataSource} from '@angular/material';
import {AddOwnershipDialog}from './app-add-ownership-dialog/add-ownership-dialog.component';
import {Owner} from '../customer-info/customer-info.class';


@Component({
  selector: 'app-ownership-list',
  templateUrl: './ownership-list.component.html',
  styleUrls: ['./ownership-list.component.css']
})
export class OwnershipListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'percentOfOwnership', 'typeOfRelatedParty','remarks'];
  dataSource: MatTableDataSource<any>;
 
  @Input()
    data: Owner[];
    
  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }
  openDialog() {
    const dialogRef = this._dialog.open(AddOwnershipDialog, {
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        console.log('The dialog was closed');
        // console.log(result);
        result.Id=0;
        this.data.push(result);
        this.dataSource = new MatTableDataSource(this.data);
  
        
        // console.log( this.dataSource);
      }
      
    });
  }
}

