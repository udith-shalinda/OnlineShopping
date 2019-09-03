import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signinform : FormGroup;

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.signinform = new FormGroup({
      'email':new FormControl(''),
      'password':new FormControl('')
    })
  }
  signout(){
    this.authService.createUser(this.signinform.value.email,this.signinform.value.password);
  }

}
