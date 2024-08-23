import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  private urlAPI: string

  constructor(
    private http: HttpClient
  ) {
    this.urlAPI = environment.API_URL
  }

  listAll(clientId: number) : Observable<any>{
    return this.http.get(`${this.urlAPI}/demand/${clientId}`).pipe(take(1))
  }

  updateStatus(queueItem: any) : Observable<any>{
    const data = queueItem
    console.log(data)
    return this.http.put(`${this.urlAPI}/demand`, data).pipe(take(1))
  }
}
