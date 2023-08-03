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

  constructor(private service : LoginService) {
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
        console.log(value)
        this.service.isAuthenticated = value ? true : false;
      },
      (error) => console.log([error])
    )
  }

}
