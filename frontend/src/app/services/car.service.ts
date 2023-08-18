import { SessionService } from './session.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  urlAPI: string;

  constructor(
    private http: HttpClient,
  ) {
    this.urlAPI = environment.API_URL
  }

  listAll(clientId : number) : Observable<any>{
    return this.http.get(`${this.urlAPI}/car/${clientId}`).pipe(take(1))
  }

  count(clientId : number) : Observable<any>{
    return this.http.get(`${this.urlAPI}/car/count/${clientId}`).pipe(take(1))
  }

  confirmDemand(data: any){
    return this.http.post(`${this.urlAPI}/demand`, data).pipe(take(1))
  }
}
