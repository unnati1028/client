import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { Staff } from '../models/staff';

const headerData = {
  headers: { 'Content-Type': 'application/json' },
};
@Injectable({
  providedIn: 'root',
})
export class StaffService {

  //perform dependency injection

  api = '/api/staff/';
  constructor(private httpClient: HttpClient) {}

  registerStaff(staff: Staff): Observable<any> {
    return this.httpClient.post(this.api + 'add', staff);
  }

  getStaff(): Observable<any> {
    return this.httpClient.get(this.api + 'all');
  }

  deleteStaff(id: any){
    return this.httpClient.delete(this.api+'delete/'+ id);
  }

  loginStaff(staff: Staff): Observable<any>{
    return this.httpClient.post(this.api+ 'login', staff);
  }

}
