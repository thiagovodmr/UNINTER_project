import { Injectable } from '@angular/core';
import { Subject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AuthEmitterService {

  private eventEmitter = new Subject<any>();

  emitToggleAuth(isAuthenticated: boolean) {
    this.eventEmitter.next(isAuthenticated);
  }

  getEventEmitter() {
    return this.eventEmitter.asObservable();
  }
}
