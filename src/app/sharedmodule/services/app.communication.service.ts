import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CommunicationService {

  notify: EventEmitter<number>;

  constructor() {
    this.notify = new EventEmitter<number>();
  }

  sendData(id: number): void {
     this.notify.emit(id);
  }
}
