import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiary } from '../../model/beneficiary';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {

  beneficiary: Beneficiary = new Beneficiary();
  error: any = {};
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  createBeneficiarySubmit(){
    this.profileService.createBeneficiary(this.beneficiary).subscribe(
      (res) => {
        
        this.router.navigate(['/dashboard']);
        this.beneficiary = this.beneficiary as Beneficiary;
        console.log("Created the beneficiary" + this.beneficiary);
      },
      (err) => {
        this.error = err.error;
      }
    )
  }

}
