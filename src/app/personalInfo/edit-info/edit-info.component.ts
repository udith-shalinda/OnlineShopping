import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  personalInfo:FormGroup;

  constructor() { }

  ngOnInit() {
    this.personalInfo = new FormGroup({
      'name':new FormControl(null,{validators:[Validators.required]}),
      'address':new FormControl(null,{validators:[Validators.required]}),
      'mobile':new FormControl(null,{validators:[Validators.required]})
    })
  }
  addPersonalInfo(){
    
  }
}
