import { Component, OnInit, Input } from '@angular/core';
import { GridDataService } from '../grid-data.service';
import { Router } from '@angular/router';
import {AllModules,Module} from '@ag-grid-enterprise/all-modules'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public modules: Module[] = AllModules;

  [x: string]: any;
  @Input() columnData = [];
  @Input() rowData = [];
  autoGroupColumnDef;
  rowGroupPanelShow;
  defaultColDef;
  sideBar;


  constructor(private DataService: GridDataService, public router: Router) {
    

  }

  ngOnInit() {
    this.columnData = this.DataService.getcolumnDefs();
    this.rowData = this.DataService.getrowData();
     this.autoGroupColumnDef={minwidth:200};
     this.rowGroupPanelShow='always';
     this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter: true,
      resizable:true
    }
    this.sideBar = 'columns'
  }




  close() {
    this.router.navigate(['']);
  }

}
