import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from "rxjs/operators";
import { Observable } from 'rxjs';
import { User } from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated : boolean = false;
  isAdmin: boolean = false;

  constructor(private http: HttpClient) { }

  authenticate(user: String, password: String): Observable<User>{
    const url = "http://localhost:8080/api/user/login"
    const data = {
      "user": user,
      "password": password
    }
    return this.http.post<User>(url, data).pipe(take(1));
  }
}
