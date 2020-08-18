import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AgGridModule } from 'ag-grid-angular';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';
import { ReconsComponent } from './homepage/recons/recons.component';
import { SummaryComponent } from './homepage/summary/summary.component';
import { ReportsComponent } from './homepage/reports/reports.component';
import { GridDataService } from './homepage/grid-data.service';
import { StepperComponent } from './homepage/stepper/stepper.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu'; 



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReconsComponent,
    SummaryComponent,
    ReportsComponent,
    StepperComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    AgGridModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    
    
      
  ],
  providers: [GridDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
