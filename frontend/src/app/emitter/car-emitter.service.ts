import { Injectable } from '@angular/core';
import { Subject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CarEmitterService {

  private eventEmitter = new Subject<any>();

  sendEvend(dados: any) {
    this.eventEmitter.next(dados);
  }

  getEventEmitter() {
    return this.eventEmitter.asObservable();
  }
}
