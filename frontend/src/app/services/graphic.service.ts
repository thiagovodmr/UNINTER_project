import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphicService {

  urlAPI: string

  constructor(private http: HttpClient) {
    this.urlAPI = environment.API_URL
  }

  getSalesCurrentMonth(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlAPI}/graphics/sales/current-month`);
  }
}
