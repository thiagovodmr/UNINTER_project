import { SessionService } from './../../services/session.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isUserLogged : boolean = false;
  isUserLoggedAdmin : boolean = false;

  constructor(
    private loginService : LoginService,
    private session : SessionService
  ) { }

  ngOnInit(): void {
    this.isAdmin();
  }

  isLogged(): boolean{
    this.isUserLogged = !!this.session.getUserLogged()
    return this.isUserLogged
  }

  isAdmin(){
    if(this.isLogged()){
      this.isUserLoggedAdmin = (this.session.getUserLogged().role == "ADMIN")
    }
    return false
  }

  logout(){
    this.session.logout()
    this.isUserLogged = false
    this.isUserLoggedAdmin = false
  }

}
