import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/profile/model/experience';
import { ProfileService } from 'src/app/profile/services/profile.service';


@Component({
  selector: 'app-display-exp',
  templateUrl: './display-exp.component.html',
  styleUrls: ['./display-exp.component.css']
})
export class DisplayExpComponent implements OnInit {

  @Input("exp") 
  exp: any[] = []; //array

  @Output()
  expId: EventEmitter<string> = new EventEmitter<string>();
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.exp);
  }

  deleteExp(id: string): void{
    this.expId.emit(id); //exposes value to parent component (dashboard)
    console.log(id);
    window.location.reload();
  }
  

}
