import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Notification {
  notification= signal<string | null>(null);

  showSuccess(message: string): void {
    this.notification.set(message);
    setTimeout(() => {this.notification.set(null)},500);
  }

}
