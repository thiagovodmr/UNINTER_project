import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from "rxjs/operators";
import { Observable } from 'rxjs';
import { User } from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(user: String, password: String): Observable<User>{
    const url = "http://localhost:8080/api/user/create"
    const data = {
      "name": user,
      "password": password
    }
    return this.http.post<User>(url, data).pipe(take(1));
  }
}
