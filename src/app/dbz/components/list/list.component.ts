import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public deletedIndex : EventEmitter<number> = new EventEmitter();

  @Input('customProperty')
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    },
  ]

  onDeleteCharacter(index:number):void{
    this.deletedIndex.emit(index);
    console.log(index)

  }
}


