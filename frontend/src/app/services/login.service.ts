import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(user: String, password: String){
    const url = "http://localhost:8080/login"
    const data = {
      "user": user,
      "password": password
    }
    return this.http.post(url, data).pipe(take(1));
  }
}
