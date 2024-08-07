import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registerForm : FormGroup ;

  constructor(
    private service : RegisterService,
    private router: Router
  ) {
    this.registerForm = new FormGroup(
      {
        user : new FormControl(""),
        password : new FormControl(""),
        repeatPassword : new FormControl("")
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const user = this.registerForm.value.user
    const password = this.registerForm.value.password
    const repeatPassword = this.registerForm.value.repeatPassword

    if(password != repeatPassword){
      alert("senhas diferentes")
      return
    }

    this.service.register(user, password).subscribe(
      () => {
        this.router.navigate(['/login'])
      },
      (error) => {
        alert("não foi possível fazer o cadastro")
        console.log([error])
      }
    )
  }

}
