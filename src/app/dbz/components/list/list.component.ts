import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(){}

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  @Input('customProperty')
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    },
  ]

  onDeleteCharacter(id?:string){
    if(!id) return;
    console.log(id)
    this.onDelete.emit(id);
  }
}

