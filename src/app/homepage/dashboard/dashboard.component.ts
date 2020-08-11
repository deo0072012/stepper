import { Component, OnInit } from '@angular/core';
import {GridDataService} from '../grid-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  columnData= [];
  rowData= [];

  constructor(private DataService: GridDataService) { }

  ngOnInit(){
    this.columnData = this.DataService.getcolumnDefs();
    this.rowData = this.DataService.getrowData();
  }
  

  
}
