import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter()

  @Input('arrayCharacter') //recibir lo que le manda el componente padre al hijo y guardar la data en esa propiedad
  public characterList:Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]; 

  onDeleteCharacter(id:string):void {
    console.log({id});
    
    //TODO: emitir id del personaje
    this.onDelete.emit(id)
    
  }
}
