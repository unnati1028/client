import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { httpInterceptors } from '../shared/interceptors';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';


@NgModule({
  declarations: [
    CreateProfileComponent,
    AddEducationComponent,
    AddExperienceComponent
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    ProfileRoutingModule
  ],
  providers : [ProfileService, httpInterceptors]
})
export class ProfileModule { }
