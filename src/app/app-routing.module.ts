import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReconsComponent } from './homepage/recons/recons.component';
import { SummaryComponent } from './homepage/summary/summary.component';
import { ReportsComponent } from './homepage/reports/reports.component';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';
import { StepperComponent } from './homepage/stepper/stepper.component';



const routes: Routes = [
  
  { path:'', redirectTo: 'DashboardComponent', pathMatch: 'full'},
  { path:'recons', component: ReconsComponent},
  { path:'summary', component: SummaryComponent},
  {path: 'stepper', component:StepperComponent},
  {path: 'dashboard', component:ReconsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
