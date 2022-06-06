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


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardActionComponent,
    DisplayEduComponent,
    DisplayExpComponent
  ],
  imports: [
    CommonModule,HttpClientModule,
    DashboardRoutingModule
  ],
  providers:[
    ProfileService,
    httpInterceptors
  ]
})
export class DashboardModule { }
