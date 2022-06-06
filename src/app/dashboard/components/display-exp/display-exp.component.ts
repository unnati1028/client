import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/profile/model/experience';


@Component({
  selector: 'app-display-exp',
  templateUrl: './display-exp.component.html',
  styleUrls: ['./display-exp.component.css']
})
export class DisplayExpComponent implements OnInit {

  @Input("exp") 
  exp: Experience[] = []; //array

  constructor() { }

  ngOnInit(): void {
    console.log(this.exp[0]);
  }

}
