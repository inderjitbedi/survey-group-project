import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  @Output() historyListUpdate: EventEmitter<any> = new EventEmitter();
  @Output() profileUpdate: EventEmitter<any> = new EventEmitter();

  profileUpdated(data:any): void {
    this.profileUpdate.emit(data);
  }
}
