import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AllModules,Module} from '@ag-grid-enterprise/all-modules'



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public modules: Module[] = AllModules;

  constructor( public router: Router) {

  }

  ngOnInit() {

  }




  close() {
  }

}
