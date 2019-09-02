import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userIsAuthentication :boolean= false;
  private authStatus:Subscription;

  constructor(
    private authService :AuthService
  ) { }

  ngOnInit() {
    this.authStatus = this.authService.getAuthStatusListner().subscribe(response=>{
      this.userIsAuthentication = response;
    });
  }
  logout(){
    this.authService.Logout();
  }
}
