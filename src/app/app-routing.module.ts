import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReconsComponent } from './homepage/recons/recons.component';
import { SummaryComponent } from './homepage/summary/summary.component';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';
import { StepperComponent } from './homepage/stepper/stepper.component';
import { SourcesComponent } from './sources/sources.component';



const routes: Routes = [
  
  { path:'', redirectTo: 'DashboardComponent', pathMatch: 'full'},
  { path:'dashboard', component: DashboardComponent},
  { path:'summary', component: SummaryComponent},
  {path: 'configurations', component:StepperComponent},
  {path: 'dashboard', component:ReconsComponent},
  {path: 'sources', component:SourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
