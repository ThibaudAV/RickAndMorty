import { Component, OnInit } from '@angular/core';
import { Character } from '../models/Character';
import { CharactersRepository } from '../services/character-repository.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent implements OnInit {
  allCharacters: Character[] = [];

  constructor(private charactersRepository: CharactersRepository) {}

  ngOnInit(): void {
    this.charactersRepository.getAllCharacters().then((list) => {
      this.allCharacters = list.results;
    });
  }
}
