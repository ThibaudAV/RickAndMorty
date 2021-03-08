import { Component, OnInit } from '@angular/core';
import { Character } from '../models/Character';
import { CharactersRepository } from '../services/character-repository.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent implements OnInit {
  allCharacters$?: Observable<Character[]>;

  searchForm = new FormGroup({
    name: new FormControl(''),
    status: new FormControl(''),
    gender: new FormControl(''),
  });

  constructor(private charactersRepository: CharactersRepository) {}

  ngOnInit(): void {
    this.allCharacters$ = this.charactersRepository
      .getAllCharacters()
      .pipe(map((list) => list.results));

    this.searchForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
