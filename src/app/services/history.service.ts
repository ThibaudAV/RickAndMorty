import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CharactersList } from '../models/CharactersList';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private events: { date: Date; character: Character }[] = [];
  constructor() {}

  addEvent(character: Character) {
    this.events.push({
      date: new Date(),
      character,
    });
  }

  getEvents() {
    return this.events;
  }
}
