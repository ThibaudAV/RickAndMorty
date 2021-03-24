import { Component, OnInit } from '@angular/core';
import { Character } from '../models/Character';
import { HistoryService } from '../services/history.service';

@Component({
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  events: { date: Date; character: Character }[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.events = this.historyService.getEvents();
  }
}
