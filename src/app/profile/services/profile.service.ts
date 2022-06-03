import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProfile } from '../model/createprofile';

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
}
