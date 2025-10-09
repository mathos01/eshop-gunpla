import {Component, signal} from '@angular/core';

// counter.ts
@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrls: ['./counter.scss']
})
export class Counter {
  count = signal(0);

  increment(): void {
    this.count.update(current => current++);
  }
  decrement(): void {
    this.count.update(current => current--);
  }
  reset(): void {
    this.count.set(0);
  }
}
