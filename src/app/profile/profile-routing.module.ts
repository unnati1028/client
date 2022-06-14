import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';

const routes: Routes = [
  {
    path: 'create-profile',
    component: CreateProfileComponent,
  },
  {
    path: 'experience',
    component: AddExperienceComponent,
  },
  {
    path: 'education',
    component: AddEducationComponent,
  },
  {
    path: 'create-bank',
    component: AddBankComponent,
  },
  {
    path: 'create-ben',
    component: AddBeneficiaryComponent,
  },
  {
    path:'create-trans',
    component: CreateTransactionComponent,
  },
  // {
  //   path: 'display-profiles',
  //   component: DisplayProfileComponent,
  // },
  // {
  //   path: 'display-profile/:id',
  //   component: AddEducationComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
