import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent {

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void{
    console.log(this.character)
  }

}
