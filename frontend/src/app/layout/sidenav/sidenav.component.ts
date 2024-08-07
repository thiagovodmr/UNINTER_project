import { AuthEmitterService } from './../../emitter/auth-emitter.service';
import { CarEmitterService } from './../../emitter/car-emitter.service';
import { CarService } from './../../services/car.service';
import { SessionService } from './../../services/session.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  countItems : number = 0;
  name: String = "";

  constructor(
    public loginService : LoginService,
    private session : SessionService,
    private carService: CarService,
    private carEmitter: CarEmitterService,
    private authEmitterService: AuthEmitterService,
    private router : Router
  ) { }

  ngOnInit(): void {
    const userLogged = this.session.getUserLogged()
    if(userLogged){
      this.login(userLogged)
    }

    this.carEmitter.getEventEmitter().subscribe(dados => {
      if(dados){
        this.countItemsCar(userLogged.id)
      }
    });

    this.authEmitterService.getEventEmitter().subscribe((isAuthenticated) => {
      if(isAuthenticated){
        const userLogged = this.session.getUserLogged()
        this.login(userLogged)
      }
    });
  }

  logout(){
    this.session.logout()
    this.loginService.isAuthenticated = false
    this.loginService.isAdmin = false
    this.router.navigate(["/list"])
    this.name=""
  }

  login(userLogged: any){
    this.loginService.isAuthenticated = true
    this.name = userLogged.name
    if(userLogged.role == "ADMIN"){
      this.loginService.isAdmin = true
    }else{
      this.countItemsCar(userLogged.id)
      this.loginService.isAdmin = false
    }
  }

  countItemsCar(id: number){
    this.carService.count(id).subscribe(
      (res) => {
        this.countItems = parseInt(res)
      },
      (err) => {console.log(err)}
    )
  }

}
