import { Router } from '@angular/router';
import { SessionService } from './../../services/session.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/class/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup ;

  constructor(
    private service : LoginService,
    private session: SessionService,
    private router: Router
  ) {
    this.loginForm = new FormGroup(
      {
        user : new FormControl(""),
        password : new FormControl("")
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const user = this.loginForm.value.user
    const password = this.loginForm.value.password
    this.service.authenticate(user, password).subscribe(
      (user : User) => {
        this.session.setUserLogged(user)
        this.router.navigate(['/list'])
        this.service.isAuthenticated = true
        if(user.role == "ADMIN"){
          this.service.isAdmin = true
        }
      },
      (error) => {
        alert("não foi possível fazer login")
        console.log([error])
      }
    )
  }

}
