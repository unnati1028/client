import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-display-edu',
  templateUrl: './display-edu.component.html',
  styleUrls: ['./display-edu.component.css']
})
export class DisplayEduComponent implements OnInit {

  @Input("edu") 
  edu: any[] = []; //array

  @Output()
  eduId: EventEmitter<string> = new EventEmitter<string>();
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.edu);
  }

  deleteEdu(id: string): void{
    this.eduId.emit(id);
    console.log(id);
    window.location.reload();
  }

}
