import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AgGridModule } from 'ag-grid-angular';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';
import { ReconsComponent } from './homepage/recons/recons.component';
import { SummaryComponent } from './homepage/summary/summary.component';
import { ReportsComponent } from './homepage/reports/reports.component';
import { GridDataService } from './homepage/grid-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReconsComponent,
    SummaryComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    AgGridModule.withComponents([DashboardComponent]),
    MatListModule,
    MatIconModule
  ],
  providers: [GridDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
