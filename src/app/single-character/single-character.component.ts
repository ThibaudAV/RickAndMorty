import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css'],
})
export class SingleCharacterComponent implements OnInit {
  character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Dead',
    species: 'Human',
    gender: 'Male',
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    url: 'https://rickandmortyapi.com/api/character/1',
  };

  constructor() {}

  ngOnInit(): void {}
}
