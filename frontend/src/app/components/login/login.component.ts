import { Router } from '@angular/router';
import { SessionService } from './../../services/session.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      (value) => {
        this.session.setUserLogged(value)
        this.router.navigate(['/list'])
      },
      (error) => {
        alert("não foi possível fazer login")
        console.log([error])
      }
    )
  }

}
