import { Injectable } from '@angular/core';
import { CardModel } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class GameRepositoryService {
  private games: CardModel[] = [
    {
      id: 1,
      label: '',
      name: 'Call of Duty®: Modern Warfare® II',
      price: 359.99,
      description: 'The latest installment in the Call of Duty series.',
      imgCard: '/assets/cards/call-of-duty-modern-warfare-ii-card.jpg',
      imgBanner: '/assets/cards/call-of-duty-modern-warfare-ii-banner.jpg',
      plataforms: ['PS4', 'PS5', 'Digital']
    },
    {
      id: 2,
      label: 'Exclusive',
      name: "Marvel's Spider-Man 2",
      price: 249.99,
      description: 'Swing through the city in this Spider-Man adventure.',
      imgCard: '/assets/cards/spider-man-2-card.jpg',
      imgBanner: '/assets/banners/spider-man-2-banner.jpg',
      plataforms: ['PS4', 'PS5']
    },
    {
      id: 3,
      label: '',
      name: 'ELDEN RING',
      price: 369.99,
      description: 'An epic open-world fantasy adventure.',
      imgCard: '/assets/cards/elden-ring-card.jpg',
      imgBanner: '/assets/banners/elden-ring-banner.jpg',
      plataforms: ['PS4', 'PS5', 'Digital']
    },
    {
      id: 4,
      label: 'Exclusive',
      name: 'God of War Ragnarök',
      price: 259.99,
      description: 'Kratos returns in this Norse mythology sequel.',
      imgCard: '/assets/cards/god-of-war-ragnarok-card.jpg',
      imgBanner: '/assets/banners/god-of-war-ragnarok-banner.jpg',
      plataforms: ['PS4', 'PS5']
    },
    {
      id: 5,
      label: '',
      name: 'STAR WARS Jedi',
      price: 254.99,
      description: 'Become a Jedi in the Star Wars universe.',
      imgCard: '/assets/cards/star-wars-jedi-card.jpg',
      imgBanner: '/assets/banners/star-wars-jedi-banner.jpg',
      plataforms: ['PS4', 'PS5']
    },
    {
      id: 6,
      label: 'Exclusive',
      name: 'The Last of Us™ Parte I',
      price: 339.99,
      description:
        'Survive in a post-apocalyptic world in this action-adventure game.',
      imgCard: '/assets/cards/the-last-of-us-part-i-card.jpg',
      imgBanner: '/assets/banners/the-last-of-us-part-i-banner.jpg',
      plataforms: ['PS4', 'PS5']
    },
  ];

  constructor() {}

  getCardById(id: number): CardModel | undefined {
    return this.games.find((game) => game.id === id);
  }

  getRandomCards(rnd: number = 5): CardModel[] {
    const copy = [...this.games];
    const randomCards: CardModel[] = [];

    while (randomCards.length < rnd && copy.length > 0) {
      const randomIndex = Math.floor(Math.random() * copy.length);
      const randomCard = copy.splice(randomIndex, 1)[0];
      randomCards.push(randomCard);
    }

    return randomCards;
  }
}
