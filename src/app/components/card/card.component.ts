import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  model!: CardModel;

  constructor() { }

  ngOnInit(): void {
    this.model = new CardModel();
    this.model.label = 'Exclusive'
    this.model.name = 'Marvel’s Spider-Man 2';
  }

}
