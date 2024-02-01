import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>Contador: {{counter}}</h1>
<hr>
<button (click)="incrementCounter(1)" >+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="incrementCounter(-1)">-1</button>
    `
})

export class CounterComponent {
    public counter: number = 10;

  incrementCounter(value: number){
    this.counter+=value;
  }
  resetCounter(){
    this.counter = 10;
  }
}