import { Component, OnInit } from '@angular/core';
import { Book, NewArrival } from '../../../utils/types';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public data: {
    popular: Book[];
    top: Book[];
    elephant: Book[];
    peppa: Book[];
    new: Book[];
    best: Book[];
  } = {
    popular: [],
    top: [],
    elephant: [],
    peppa: [],
    new: [],
    best: [],
  };
  constructor(private cs: ContentService) {}

  public ngOnInit(): void {
    this.data.best = this.cs.getBooks();
    this.data.new = this.cs.getBooks();
    this.data.peppa = this.cs.getBooks();
    this.data.elephant = this.cs.getBooks();
    this.data.top = this.cs.getBooks();
    this.data.popular = this.cs.getBooks();
  }

  public getBooks(): Book[] {
    return structuredClone(this.cs.getBooks());
  }

  public getNewArrivals(): NewArrival[] {
    return this.cs.newArrivals;
  }
}
