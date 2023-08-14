import { SessionService } from './../../services/session.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  countItems : number = 0;

  constructor(
    public loginService : LoginService,
    private session : SessionService
  ) { }

  ngOnInit(): void {
    if(this.session.getUserLogged()){
      this.loginService.isAuthenticated = true
      if(this.session.getUserLogged().role == "ADMIN"){
        this.loginService.isAdmin = true
      }else{
        this.loginService.isAdmin = false
      }
    }
  }

  logout(){
    this.session.logout()
    this.loginService.isAuthenticated = false
    this.loginService.isAdmin = false
  }

}
