import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { httpInterceptors } from '../shared/interceptors';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    ProfileRoutingModule
  ],
  providers : [ProfileService, httpInterceptors]
})
export class ProfileModule { }
