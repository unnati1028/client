import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //ngModel: 2 way binding
  register: Register = new Register();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  registerSubmit() {
    console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe((res) => {
      console.log(JSON.stringify(res));
    });
  }
}
