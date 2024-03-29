import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid())

@Injectable({ providedIn: 'root' })
export class DbzService {

    public characters: ICharacter[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 9500
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }];

    addCharacter(character: ICharacter): void {
        console.log(character);
        const newCharacter: ICharacter = { id: uuid(), ...character }
        this.characters.push(newCharacter);
    }

    onDeleteCharacter(index: number): void {
        console.log(index);
        this.characters.splice(index, 1);
    }

    deleteCharacterById(id: string): void {
        this.characters = this.characters.filter(character => character.id !== id);
    }

}