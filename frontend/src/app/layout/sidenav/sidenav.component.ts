import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  isLogged(){
    return this.loginService.isAuthenticated;
  }

}
