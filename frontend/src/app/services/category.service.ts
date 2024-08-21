import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  urlAPI: string

  constructor(private http: HttpClient) {
    this.urlAPI = environment.API_URL
  }

  listAll() : Observable<any>{
    return this.http.get(`${this.urlAPI}/category`).pipe(take(1))
  }

  create(description: any){
    const data = {
      "description": description,
    }
    return this.http.post(`${this.urlAPI}/category`, data).pipe(take(1))
  }

}
