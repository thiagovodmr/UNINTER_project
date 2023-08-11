import { SessionService } from './../../services/session.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  constructor(
    public loginService : LoginService,
    private session : SessionService
  ) { }

  ngOnInit(): void {
    if(this.session.getUserLogged()){
      this.loginService.isAuthenticated = true
      if(this.session.getUserLogged().role == "ADMIN"){
        this.loginService.isAdmin = true
      }
    }
  }

  logout(){
    this.session.logout()
    this.loginService.isAuthenticated = false
  }

}
