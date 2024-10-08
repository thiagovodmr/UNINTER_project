import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ListService {
  urlAPI: string;

  constructor(
    private http: HttpClient
  ) {
    this.urlAPI = environment.API_URL
  }

  create(formData : any) : Observable<any>{
    return this.http.post(`${this.urlAPI}/item`, formData).pipe(take(1))
  }

  listAll() : Observable<any>{
    return this.http.get(`${this.urlAPI}/item`).pipe(take(1))
  }

  listByCategory(categoryId : number) : Observable<any>{
    return this.http.get(`${this.urlAPI}/item/byCategory/${categoryId}`).pipe(take(1))
  }

  PostAddCar(itemId : number, userId : number){
    const data = {itemId: itemId, clientId: userId}
    return this.http.post(`${this.urlAPI}/item/car`, data).pipe(take(1))
  }

  deleteItem(itemId: number){
    return this.http.delete(`${this.urlAPI}/item/${itemId}`).pipe(take(1))
  }

}
