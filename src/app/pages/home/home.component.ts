import { Component, OnInit } from '@angular/core';
import {
  Book,
  BookCategory,
  NewArrival,
  RestCategoryData,
} from '../../../utils/types';
import { ContentService } from '../../service/content.service';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private age = 5;
  public topSellerBooks!: any[];
  public popularBooks!: Book[];
  public genreBooks!: Book[];
  public teachersPick!: Book[];
  public window = window;
  public ageGroup = this.cs.ageGroup;
  public mustReads!: BookCategory[];

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

  constructor(
    private cs: ContentService,
    private bookService: BookService,
  ) {}

  public ngOnInit(): void {
    this.getTopSellerBooks();
    this.getPopularBooks();
    //this.getGenreBooks();
    this.getMustReadBooks();
    this.getTeachersPick();
    this.data.best = this.cs.getBooks().slice(0, 12);
    this.data.new = this.cs.getBooks();
    this.data.peppa = this.cs.getBooks().slice(0, 10);
    this.data.elephant = this.cs.getBooks();
    this.data.top = this.cs.getBooks().slice(0, 10);
    this.data.popular = this.cs.getBooks().slice(0, 15);
  }

  public getNewArrivals(): NewArrival[] {
    return this.cs.newArrivals;
  }
  public getTopSellerBooks(): void {
    this.bookService.getTopSellerBooks(this.age).subscribe({
      next: (res: any) =>{
        console.log("topseller");
        console.log("@@@@@");
        
        this.topSellerBooks = res.items
        console.log("topseller");
        console.log(this.topSellerBooks);
      },
      error: (err) => console.log(err),
    });
  }

  private getPopularBooks(): void {
    this.bookService.getPopularBooks(this.age).subscribe({
      next: (res: any) =>
        (this.popularBooks = res.items),
      error: (err) => console.log(err),
    });
  }

  private getGenreBooks(): void {
    this.bookService.getBooksPickByTeachers(this.age).subscribe({
      next: (res: any) =>
        (this.genreBooks = res.items),
      error: (err) => console.log(err),
    });
  }
  private getMustReadBooks(): void {
    this.bookService.getMustReadBooks(this.age).subscribe({
      next: (res: any) => (this.mustReads = res.items),
      error: (err) => console.log(err),
    });
  }

  private getTeachersPick(): void {
    this.bookService.getBooksPickByTeachers(this.age).subscribe({
      next: (res: any) =>
        (this.teachersPick = res.items),
      error: (err) => console.log(err),
    });
  }

  private getScreenObject(): Screen {
    return window.screen;
  }

  public getCalculatedValue(smallScreenValue: any, largeScreenValue: any): any {
    return this.getScreenObject()?.width < 600
      ? smallScreenValue
      : largeScreenValue;
  }

  public getScrollPerClick(): number {
    return this.getScreenObject()?.width / 2;
  }
}
