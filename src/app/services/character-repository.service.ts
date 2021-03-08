import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CharactersList } from '../models/CharactersList';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root',
})
export class CharactersRepository {
  constructor(private httpClient: HttpClient) {}

  getAllCharacters() {
    return this.httpClient.get<CharactersList>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  getCharacterById(id: number) {
    return this.httpClient.get<Character>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
  }
}
