import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../model/bank';
import { Beneficiary } from '../model/beneficiary';
import { CreateProfile } from '../model/createprofile';
import { Education } from '../model/education';
import { Experience } from '../model/experience';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api = '/api/profile';

  constructor(private httpClient: HttpClient) { }

  getProfile(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  createProfile(profile: CreateProfile): Observable<any>{
    return this.httpClient.post(this.api, profile);
  }

  createExperience(experience : Experience){
    return this.httpClient.post(this.api+ '/experience', experience);
  }

  createEducation(education : Education){
    return this.httpClient.post(this.api + '/education', education);
  }

  deleteEducation(eduId : string){
    return this.httpClient.delete(this.api + '/education/'+ eduId);
  }
  deleteExperience(expId : string){
    return this.httpClient.delete(this.api + '/experience/'+ expId);
  }

  createBank(bank: Bank){
    return this.httpClient.post(this.api + '/bank', bank);
  }

  createBeneficiary(beneficiary: Beneficiary){
    return this.httpClient.post(this.api + '/beneficiary', beneficiary);
  }

  deleteBeneficiary(benId: string){
    return this.httpClient.delete(this.api + '/beneficiary/'+benId);
  }

  deleteBank(bankId : string){
    return this.httpClient.delete(this.api + '/bank/'+bankId);
  }

  createTransaction(transaction: Transaction){
    return this.httpClient.post(this.api+ '/transaction', transaction);
  }

}
