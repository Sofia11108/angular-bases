import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid' //es una función

console.log(uuid());


@Injectable({
    providedIn: 'root' //con esta etiqueta no es necesario importar el servicio en el modulo / será un singleton
})
export class DbzService {
    constructor() { }

    public characters:Character[] = [
        {
            id: uuid(),
            name: 'krillin',
            power: 1000
        },
        {
            id:uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id:uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    addCharacter(character:Character):void {
        console.log("main page", character);
        const newCharacter: Character = {
            id: uuid(),
            ...character
        }

        this.characters.push(newCharacter) 
    }

    // onDeleteCharacter(index:number) {
    //     this.character.splice(index, 1)
    // }
    deleteCharacterById(id:string):void {
        this.characters = this.characters.filter(character => character.id !== id)
    }
    
}