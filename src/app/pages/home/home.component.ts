import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { GameRepositoryService } from 'src/app/services/game-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  models!: CardModel[];

  constructor(private gamesRepository: GameRepositoryService) {
    const cards: CardModel[] = gamesRepository.getRandomCards();
    if (cards === undefined) {
      this.models = [new CardModel()];
    } else {
      this.models = cards;
    }
  }

  ngOnInit(): void {}
}
