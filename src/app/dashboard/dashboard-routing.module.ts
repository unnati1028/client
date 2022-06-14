import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayTransactionsComponent } from './components/display-transactions/display-transactions.component';

const routes: Routes = [
  {
  path:'',
  component: DashboardComponent
  },  
  {
    path:'transactions',
    component: DisplayTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

