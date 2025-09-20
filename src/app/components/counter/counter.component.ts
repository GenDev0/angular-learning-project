import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter = signal(0);
  incrementValue = input(1);
  increment() {
    console.log('Increment button clicked');
    this.counter.update((v) => v + this.incrementValue());
  }
  decrement() {
    console.log('Decrement button clicked');
    this.counter.update((v) => v - this.incrementValue());
  }
  reset() {
    console.log('Reset button clicked');
    this.counter.set(0);
  }
}
