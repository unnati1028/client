import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //ngModel: 2 way binding
  register: Register = new Register();
  constructor() {}

  ngOnInit(): void {}

  registerSubmit() {
    console.log(JSON.stringify(this.register));
  }
}
