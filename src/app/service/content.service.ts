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
      image: 'assets/img/book1.png',
      count: 65,
    },
    {
      title: 'Can I Play Too? Elephant and Piggie',
      ratings: '4.3',
      user: 1126,
      image: 'assets/img/book2.png',
      count: 90,
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
      count: 80,
    },
    {
      title: 'Over the River: A Turkey’s Tale',
      ratings: '4.0',
      user: 2186,
      image: 'assets/img/book5.png',
      count: 100,
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
