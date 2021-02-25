import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CharactersList } from '../models/CharactersList';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root',
})
export class CharactersRepository {
  constructor(private httpClient: HttpClient) {}

  async getAllCharacters() {
    const response = await this.httpClient
      .get<CharactersList>('https://rickandmortyapi.com/api/character')
      .toPromise();

    return response;
  }

  async getCharacterById(id: number) {
    const response = await this.httpClient
      .get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
      .toPromise();

    return response;
  }
}
