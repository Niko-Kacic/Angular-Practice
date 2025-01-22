import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'Wenas Mundo';
  public counter: number = 10;

  addCounter(x:number):void {
    this.counter+=x;
  }

  resetCounter():void{
    this.counter=10;
  }

}
