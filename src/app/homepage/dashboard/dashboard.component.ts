import { Component, OnInit } from '@angular/core';
import {GridDataService} from '../grid-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  columnData= [];
  rowData= [];

  constructor(private DataService: GridDataService,public router: Router) { }

  ngOnInit(){
    this.columnData = this.DataService.getcolumnDefs();
    this.rowData = this.DataService.getrowData();
  }
  
close()
{
  this.router.navigate(['/dashboard']);
}
  
}
