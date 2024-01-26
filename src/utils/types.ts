export type NewArrival = {
  arrival: string;
  ageGroup: string;
  title: string;
  ratings: string;
  user: number;
  description: string;
  image: string;
};

export type Book = {
  name: string;
  rating: string;
  review_count: number;
  image: string;
  book_order: number;
};

export type BookCategory = {
  books: Book[];
  category?: string;
  genre?: string;
};

export type RestCategoryData = {
  success: boolean;
  book_set: BookCategory[];
};

export class Predicate {
  field: string;
  value: string | number | boolean;

  constructor(field: string, value: string | number | boolean) {
    this.field = field;
    this.value = value;
  }
}
