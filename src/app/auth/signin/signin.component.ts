import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinform : FormGroup;
  email='test@test.com';
  password='password';

  constructor(private router:Router) { }

  ngOnInit() {
    this.signinform = new FormGroup({
      'email':new FormControl(),
      'password':new FormControl()
    })
  }
  signin(){
    if(this.email== this.signinform.value.email && this.password== this.signinform.value.password){
        this.router.navigate(['/Home']);
    }else{
      console.log('email or password is incorrect');
    }
  }

}
