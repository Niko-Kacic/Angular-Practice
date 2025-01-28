import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public title: string = 'Wenas Mundo';
  public counter: number = 10;

  addCounter(x:number):void {
    this.counter+=x;
  }

  resetCounter():void{
    this.counter=10;
  }
}
