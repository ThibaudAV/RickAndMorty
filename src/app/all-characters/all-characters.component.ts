import { Component, OnInit } from '@angular/core';
import { CharactersRepository } from '../services/character-repository.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent implements OnInit {
  allCharacters: any;

  selectedCharacterId: any = undefined;

  constructor(private charactersRepository: CharactersRepository) {
    this.allCharacters = this.charactersRepository.getAllCharacters();
  }

  ngOnInit(): void {}

  public onClick(characterId: any): void {
    const selectedCharacter = this.allCharacters.find(
      (c: any) => c.id === characterId
    );

    if (selectedCharacter) {
      this.selectedCharacterId = selectedCharacter.id;
    }
  }
}
