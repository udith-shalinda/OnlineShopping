import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../personal-info.service';
import { PersonalData } from '../personal-info-model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  name='';
  address='';
  mobile='';
 

  isLoading:boolean= false;

  constructor(
    private personalInfoService:PersonalInfoService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.personalInfoService.getInfo()
    .subscribe(result=>{
      this.name = result.info.name;
      this.address = result.info.address;
      this.mobile = result.info.mobile;
      this.isLoading = false;
    });
  }

}
