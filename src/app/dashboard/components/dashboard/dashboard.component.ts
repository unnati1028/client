import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private profileService: ProfileService) { }

  profile : CreateProfile = new CreateProfile();
  error: any = {};

  //we want this rest call done instantly
  //1. object created 2. constructor called 3.ngOnInit
  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        console.log(response.user.name);
        this.profile = response;
      },
      (err) =>{
        console.log(JSON.stringify(err));
        this.error = err.error;
      }
      );
  }

}
