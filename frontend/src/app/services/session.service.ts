import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setUserLogged(user : any) {
    localStorage.setItem("userLogged", JSON.stringify(user))
  }

  getUserLogged() : any{
    const userStr = localStorage.getItem("userLogged");
    return userStr ? JSON.parse(userStr) : null;
  }

  logout(){
    localStorage.removeItem("userLogged")
  }
}
