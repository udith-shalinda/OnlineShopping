import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalInfoService } from '../personal-info.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  personalInfo:FormGroup;

  constructor(
    private personalInfoServices:PersonalInfoService
  ) { }

  ngOnInit() {
    this.personalInfo = new FormGroup({
      'name':new FormControl(null,{validators:[Validators.required]}),
      'address':new FormControl(null,{validators:[Validators.required]}),
      'mobile':new FormControl(null,{validators:[Validators.required]})
    })
  }
  addPersonalInfo(){
    this.personalInfoServices.savePersonalInfo(
      this.personalInfo.value.name,
      this.personalInfo.value.address,
      this.personalInfo.value.mobile
      );
  }
}
