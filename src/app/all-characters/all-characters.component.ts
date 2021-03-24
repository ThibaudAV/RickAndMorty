import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../models/Character';
import { CharactersRepository } from '../services/character-repository.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchParams } from '../filter-bar/filter-bar.component';
@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent implements OnInit {
  allCharacters$?: Observable<Character[]>;

  constructor(private charactersRepository: CharactersRepository) {}

  ngOnInit(): void {
    this.allCharacters$ = this.charactersRepository
      .getAllCharacters()
      .pipe(map((list) => list.results));
  }

  newSearch(params: SearchParams) {
    this.allCharacters$ = this.charactersRepository
      .getAllCharacters(params.name, params.status, params.gender)
      .pipe(map((list) => list.results));
  }
}
