import { Injectable } from '@angular/core';
import { Book, NewArrival } from '../../utils/types';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {}

  public ageGroup = [
    { imageSrc: 'assets/img/child1.png', ageGroup: [0, 1, 2, 3], height: 112 },
    { imageSrc: 'assets/img/child2.png', ageGroup: [4, 5, 6, 7], height: 130 },
    {
      imageSrc: 'assets/img/child3.png',
      ageGroup: [8, 9, 10, 11],
      height: 173,
    },
    {
      imageSrc: 'assets/img/child4.png',
      ageGroup: [],
      height: 200,
    },
  ];

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
      name: 'There’s Coriander in my Sugar Pot!',
      rating: '4.5',
      review_count: 4126,
      image: 'assets/img/book1.png',
      book_order: 42,
    },
    {
      name: 'Can I Play Too? Elephant and Piggie',
      rating: '4.3',
      review_count: 1126,
      image: 'assets/img/book2.png',
      book_order: 65,
    },
    {
      name: 'The Last Bear by Hanna Gold!',
      rating: '3.5',
      review_count: 2126,
      image: 'assets/img/book3.png',
      book_order: 65,
    },
    {
      name: 'Billy’s Bravery by Tom Percival',
      rating: '4.2',
      review_count: 3126,
      image: 'assets/img/book4.png',
      book_order: 77,
    },
    {
      name: 'Over the River: A Turkey’s Tale',
      rating: '4.0',
      review_count: 2186,
      image: 'assets/img/book5.png',
      book_order: 65,
    },

    {
      name: 'There’s Coriander in my Sugar Pot!',
      rating: '4.5',
      review_count: 4126,
      image: 'assets/img/book6.png',
      book_order: 65,
    },
    {
      name: 'Can I Play Too? Elephant and Piggie',
      rating: '4.3',
      review_count: 1126,
      image: 'assets/img/book7.png',
      book_order: 90,
    },
    {
      name: 'The Last Bear by Hanna Gold!',
      rating: '3.5',
      review_count: 2126,
      image: 'assets/img/book8.png',
      book_order: 65,
    },
    {
      name: 'Billy’s Bravery by Tom Percival',
      rating: '4.2',
      review_count: 3126,
      image: 'assets/img/book9.png',
      book_order: 80,
    },
    {
      name: 'Over the River: A Turkey’s Tale',
      rating: '4.0',
      review_count: 2186,
      image: 'assets/img/book10.png',
      book_order: 100,
    },
    {
      name: 'Lost in the Woods',
      rating: '3.8',
      review_count: 5189,
      image: 'assets/img/book11.png',
      book_order: 55,
    },
    {
      name: 'Moonlight Sonata',
      rating: '4.1',
      review_count: 6322,
      image: 'assets/img/book12.png',
      book_order: 42,
    },
    {
      name: 'Whispers of the Wind',
      rating: '3.9',
      review_count: 7455,
      image: 'assets/img/book13.png',
      book_order: 60,
    },
    {
      name: 'Sunflower Dreams',
      rating: '4.4',
      review_count: 8567,
      image: 'assets/img/book14.png',
      book_order: 75,
    },
    {
      name: 'City of Shadows',
      rating: '4.2',
      review_count: 9642,
      image: 'assets/img/book15.png',
      book_order: 88,
    },
    {
      name: 'Firefly Serenade',
      rating: '4.6',
      review_count: 10789,
      image: 'assets/img/book16.png',
      book_order: 50,
    },
    {
      name: 'Whimsical Wonders',
      rating: '3.7',
      review_count: 11234,
      image: 'assets/img/book17.png',
      book_order: 65,
    },
    {
      name: 'Pebbles on the Shore',
      rating: '4.0',
      review_count: 12456,
      image: 'assets/img/book18.png',
      book_order: 72,
    },
    {
      name: 'Stardust Symphony',
      rating: '4.5',
      review_count: 13567,
      image: 'assets/img/book19.png',
      book_order: 58,
    },
    {
      name: 'Echoes of Eternity',
      rating: '4.3',
      review_count: 14321,
      image: 'assets/img/book5.png',
      book_order: 63,
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
