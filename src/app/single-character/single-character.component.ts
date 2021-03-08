import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Character } from '../models/Character';
import { CharactersRepository } from '../services/character-repository.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss'],
})
export class SingleCharacterComponent implements OnInit {
  character$?: Observable<Character> = undefined;

  // `private` permet de définir le service `charactersRepository` comme propriété de la class
  constructor(
    private charactersRepository: CharactersRepository,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id) {
      this.character$ = this.charactersRepository.getCharacterById(
        Number(this.activatedRoute.snapshot.params.id)
      );
    }
  }
}
