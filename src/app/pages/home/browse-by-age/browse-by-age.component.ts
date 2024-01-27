import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../service/content.service';
import { Book, BookCategory, RestCategoryData } from '../../../../utils/types';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../../../service/book.service';

@Component({
  selector: 'app-browse-by-age',
  templateUrl: './browse-by-age.component.html',
  styleUrls: ['./browse-by-age.component.scss'],
})
export class BrowseByAgeComponent implements OnInit {
  public activeAge!: { lower: number; upper: number | undefined };
  public lastPageNumberFetched = 0;

  private static BESTSELLER = 'Best Seller - Most Popular';

  public window = window;
  public categories!: BookCategory[];
  public pending = true;
  public noMoreData = false;
  public mustReadCategory!: BookCategory[];
  public ageGroups = this.cs.ageGroup;

  constructor(
    private cs: ContentService,
    private location: Location,
    private actRoute: ActivatedRoute,
    private bookService: BookService,
  ) {}

  public async ngOnInit() {
    await this.actRoute.queryParams.subscribe(async (param: Params) => {
      this.lastPageNumberFetched = 0;
      this.categories = [];
      this.mustReadCategory = [];
      const { age } = param;
      this.activeAge = { lower: 0, upper: undefined };
      this.setAgeValues(age);
      this.getMustRead();
      this.getBooks();
    });
  }

  private setAgeValues(age: string) {
    if (age) {
      const a: number[] = age.split('-').map((val: string) => Number(val));
      if (a.length && !isNaN(a[0])) this.activeAge.lower = a[0];
      if (a.length >= 2 && !isNaN(a[1])) {
        this.activeAge.upper = a[1];
      } else {
        if ([0, 3, 6, 9].includes(this.activeAge.lower)) {
          this.activeAge.upper = this.activeAge.lower + 3;
        } else if (this.activeAge.lower !== 12) {
          this.setDefault();
        }
      }
    } else {
      this.setDefault();
    }
  }

  private setDefault() {
    this.activeAge.lower = 6;
    this.activeAge.upper = 9;
  }

  public getMustRead() {
    this.bookService.getMustReadBooks(this.activeAge.lower).subscribe({
      next: (value: RestCategoryData) =>
        (this.mustReadCategory = value.book_set),
      error: (error) => {
        console.log(error);
      },
    });
  }

  public getBooks() {
    this.pending = true;
    this.bookService
      .getBrowseSeriesBooks(
        this.activeAge.lower,
        this.lastPageNumberFetched + 1,
      )
      .subscribe({
        next: (value: RestCategoryData) => {
          /*if (!this.categories) {
            this.categories = value.book_set.sort((a: any, b: any) => {
              if (a.category === BrowseByAgeComponent.BESTSELLER) {
                return -1;
              } else if (b.category === BrowseByAgeComponent.BESTSELLER) {
                return 1;
              }
              return 0;
            });
          } else {
            this.categories.push(...value.book_set);
          }*/
          this.categories.push(...value.book_set);
          this.lastPageNumberFetched++;
          this.noMoreData = value.success && value.book_set.length < 1;
          this.pending = false;
        },
        error: (err) => {
          this.pending = false;
          console.log(err);
        },
      });
  }

  public back(): void {
    this.location.back();
  }

  public isActive(lower: number, upper: number | undefined): boolean {
    return lower === this.activeAge.lower && upper === this.activeAge.upper;
  }

  public getAgeGroup(): string {
    let age = this.activeAge.lower.toString();
    if (this.activeAge.upper) {
      age += `-${this.activeAge.upper}`;
    } else {
      age += '+';
    }
    return age;
  }

  public onScroll(): void {
    this.getBooks();
  }

  public trackCategories(index: number, value: any) {
    return value.category;
  }

  public trackBooks(index: number, value: any) {
    return value.id;
  }
}
