import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../../model/transaction';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  @Input("transfer")
  bankId: any;

  @Input("profile")
  profile: any;

  transaction: Transaction = new Transaction();
  error: any = {};

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  createTransactionSubmit(){
    console.log(JSON.stringify(this.transaction));
    this.transaction.date = JSON.stringify(new Date().getDate());
    this.transaction.bankId = this.bankId;
    this.profileService.createTransaction(this.transaction).subscribe(
      (res) => {
        //this.router.navigate(['/dashboard']);
        console.log(JSON.stringify(this.transaction));
      },
      (err) =>{
        if(err.error != null) this.error = err.error;
        else this.error = {};
      }
    )
  }

}
