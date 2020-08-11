import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReconsComponent } from './homepage/recons/recons.component';
import { SummaryComponent } from './homepage/summary/summary.component';
import { ReportsComponent } from './homepage/reports/reports.component';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';



const routes: Routes = [
  
  { path:'', redirectTo: 'DashboardComponent', pathMatch: 'full'},
  { path:'recons', component: ReconsComponent},
  { path:'summary', component: SummaryComponent},
  { path:'report', component:ReportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
