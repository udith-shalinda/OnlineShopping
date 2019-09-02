import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinform : FormGroup;
  
  constructor(
    private router:Router,
    private authService:AuthService
    ) { }

  ngOnInit() {
    this.signinform = new FormGroup({
      'email':new FormControl(null,{validators:Validators.required}),
      'password':new FormControl(null,{validators:Validators.required})
    })
  }
  signin(){
    this.authService.userLogin(this.signinform.value.email,this.signinform.value.password);
  }

}
