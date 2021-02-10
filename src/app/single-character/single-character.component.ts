import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CharactersRepository } from '../services/character-repository.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss'],
})
export class SingleCharacterComponent implements OnInit, OnChanges {
  @Input()
  characterId: number | undefined;

  character: any = undefined;

  // `private` permet de définir le service `charactersRepository` comme propriété de la class
  constructor(private charactersRepository: CharactersRepository) {}

  ngOnInit(): void {}

  // est exécuté quand les @Input changent
  ngOnChanges(): void {
    if (this.characterId) {
      this.character = this.charactersRepository.getCharacterById(
        this.characterId
      );
    }
  }
}
