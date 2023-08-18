import { CarEmitterService } from './../../emitter/car-emitter.service';
import { CarService } from './../../services/car.service';
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
    private session : SessionService,
    private carService: CarService,
    private emitter: CarEmitterService
  ) { }

  ngOnInit(): void {
    const userLogged = this.session.getUserLogged()
    if(userLogged){
      this.loginService.isAuthenticated = true
      if(userLogged.role == "ADMIN"){
        this.loginService.isAdmin = true
      }else{
        this.countItemsCar(userLogged.id)
        this.loginService.isAdmin = false
      }
    }

    this.emitter.getEventEmitter().subscribe(dados => {
      if(dados){
        this.countItemsCar(userLogged.id)
      }
    });
  }

  logout(){
    this.session.logout()
    this.loginService.isAuthenticated = false
    this.loginService.isAdmin = false
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
