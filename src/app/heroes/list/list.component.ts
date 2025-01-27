import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public heroNames: string[] = ['Jeff', 'Gwenpool', 'Doctor Strange', 'Hulk','DareDevil'];
}
