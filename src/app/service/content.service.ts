import { Injectable } from '@angular/core';
import { Book, NewArrival } from '../../utils/types';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {}

  public newArrivals: NewArrival[] = [
    {
      arrival: 'New Arrival',
      ageGroup: '3-6 years',
      title: 'How to Catch a Turkey - Adam Wallace',
      ratings: '4.8',
      user: 5678,
      description:
        'A clever mouse goes on a journey through the deep dark wood...',
      image: 'assets/img/Rectangle-blue.png',
    },
    {
      arrival: 'New Arrival',
      ageGroup: '7-10 years',
      title: 'Harry Potter',
      ratings: '4.9',
      user: 9876,
      description:
        'Join Harry Potter as he discovers his magical abilities and attends Hogwarts School of Witchcraft and Wizardry...',
      image: 'assets/img/yellow.png',
    },
    {
      arrival: 'New Arrival',
      ageGroup: '11-14 years',
      title: 'The Hunger Games - Suzanne Collins',
      ratings: '4.5',
      user: 5432,
      description:
        'In a dystopian future, Katniss Everdeen volunteers for the Hunger Games to protect her sister and ends up in a fight for survival...',
      image: 'assets/img/Rectangle-blue.png',
    },
  ];

  public books: Book[] = [
    {
      title: 'There’s Coriander in my Sugar Pot!',
      ratings: '4.5',
      user: 4126,
      image: 'assets/img/book1.png',
      count: 42,
    },
    {
      title: 'Can I Play Too? Elephant and Piggie',
      ratings: '4.3',
      user: 1126,
      image: 'assets/img/book2.png',
      count: 65,
    },
    {
      title: 'The Last Bear by Hanna Gold!',
      ratings: '3.5',
      user: 2126,
      image: 'assets/img/book3.png',
      count: 65,
    },
    {
      title: 'Billy’s Bravery by Tom Percival',
      ratings: '4.2',
      user: 3126,
      image: 'assets/img/book4.png',
      count: 77,
    },
    {
      title: 'Over the River: A Turkey’s Tale',
      ratings: '4.0',
      user: 2186,
      image: 'assets/img/book5.png',
      count: 65,
    },

    {
      title: 'There’s Coriander in my Sugar Pot!',
      ratings: '4.5',
      user: 4126,
      image: 'assets/img/book6.png',
      count: 65,
    },
    {
      title: 'Can I Play Too? Elephant and Piggie',
      ratings: '4.3',
      user: 1126,
      image: 'assets/img/book7.png',
      count: 90,
    },
    {
      title: 'The Last Bear by Hanna Gold!',
      ratings: '3.5',
      user: 2126,
      image: 'assets/img/book8.png',
      count: 65,
    },
    {
      title: 'Billy’s Bravery by Tom Percival',
      ratings: '4.2',
      user: 3126,
      image: 'assets/img/book9.png',
      count: 80,
    },
    {
      title: 'Over the River: A Turkey’s Tale',
      ratings: '4.0',
      user: 2186,
      image: 'assets/img/book10.png',
      count: 100,
    },
    {
      title: 'Lost in the Woods',
      ratings: '3.8',
      user: 5189,
      image: 'assets/img/book11.png',
      count: 55,
    },
    {
      title: 'Moonlight Sonata',
      ratings: '4.1',
      user: 6322,
      image: 'assets/img/book12.png',
      count: 42,
    },
    {
      title: 'Whispers of the Wind',
      ratings: '3.9',
      user: 7455,
      image: 'assets/img/book13.png',
      count: 60,
    },
    {
      title: 'Sunflower Dreams',
      ratings: '4.4',
      user: 8567,
      image: 'assets/img/book14.png',
      count: 75,
    },
    {
      title: 'City of Shadows',
      ratings: '4.2',
      user: 9642,
      image: 'assets/img/book15.png',
      count: 88,
    },
    {
      title: 'Firefly Serenade',
      ratings: '4.6',
      user: 10789,
      image: 'assets/img/book16.png',
      count: 50,
    },
    {
      title: 'Whimsical Wonders',
      ratings: '3.7',
      user: 11234,
      image: 'assets/img/book17.png',
      count: 65,
    },
    {
      title: 'Pebbles on the Shore',
      ratings: '4.0',
      user: 12456,
      image: 'assets/img/book18.png',
      count: 72,
    },
    {
      title: 'Stardust Symphony',
      ratings: '4.5',
      user: 13567,
      image: 'assets/img/book19.png',
      count: 58,
    },
    {
      title: 'Echoes of Eternity',
      ratings: '4.3',
      user: 14321,
      image: 'assets/img/book5.png',
      count: 63,
    },
  ];

  public getBooks(): any {
    const array = structuredClone(this.books);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
