import { Component } from '@angular/core';

// counter.ts
@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrls: ['./counter.scss']
})
export class Counter {
  count = 0;
  inputValue = '';
  increment(): void {
    this.count++;
  }
  decrement(): void {
    this.count--;
  }
  reset(): void {
    this.count = 0;
  }
  onKeyUp(event: KeyboardEvent): void {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
