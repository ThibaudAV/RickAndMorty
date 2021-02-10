import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersRepository {
  private allCharacters = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
    {
      id: 2,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Alien',
      gender: 'Female',
      location: {
        name: 'Abadango',
        url: 'https://rickandmortyapi.com/api/location/2',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
      url: 'https://rickandmortyapi.com/api/character/6',
      created: '2017-11-04T19:50:28.250Z',
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Dead',
      species: 'Human',
      gender: 'Female',
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',

      url: 'https://rickandmortyapi.com/api/character/3',
      created: '2017-11-04T19:09:56.428Z',
    },
  ];
  constructor() {}

  getAllCharacters() {
    return this.allCharacters;
  }

  getCharacterById(id: number) {
    return this.allCharacters.find((c) => c.id === id);
  }
}
