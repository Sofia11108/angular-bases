// import { Component } from "@angular/core";

// @Component({
//     selector: 'app-counter',
//     template: `<h1>Hola desde el componente counter</h1>`
// })
// export class CounterComponent {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <h1>Hola desde el component counter</h1> 
    <p>Counter: {{counter}} </p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetCounter()" >Reset</button>
    <hr>
    `
})

export class CounterComponent {

  public counter: number = 10;

  constructor() { }

  increaseBy(value: number): void {
    this.counter += value
  }

  resetCounter(): void {
    this.counter = 10
  }
}