import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../profile/services/profile.service';
import { httpInterceptors } from '../shared/interceptors';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { DisplayEduComponent } from './components/display-edu/display-edu.component';
import { DisplayExpComponent } from './components/display-exp/display-exp.component';
import { DisplayBankComponent } from './components/display-bank/display-bank.component';
import { CreateTransactionComponent } from '../profile/components/create-transaction/create-transaction.component';
import { ProfileModule } from '../profile/profile.module';
import { DisplayTransactionsComponent } from './components/display-transactions/display-transactions.component';
import { FormsModule } from '@angular/forms';
import { DisplayBenComponent } from './components/display-ben/display-ben.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardActionComponent,
    DisplayEduComponent,
    DisplayExpComponent,
    DisplayBankComponent,
    DisplayBenComponent,
    DisplayTransactionsComponent,
    
  ],
  imports: [
    CommonModule,HttpClientModule,
    FormsModule,
    DashboardRoutingModule,
  ],
  providers:[
    ProfileModule,
    ProfileService,
    httpInterceptors
  ]
})
export class DashboardModule { }
