import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../service/content.service';
import { Book } from '../../../../utils/types';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-browse-by-age',
  templateUrl: './browse-by-age.component.html',
  styleUrls: ['./browse-by-age.component.scss'],
})
export class BrowseByAgeComponent implements OnInit {
  public activeAge!: { lower: number; upper: number | undefined };

  constructor(
    private cs: ContentService,
    private location: Location,
    private actRoute: ActivatedRoute,
  ) {}
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
  public window = window;

  public ngOnInit(): void {
    this.data.best = this.cs.getBooks();
    this.data.new = this.cs.getBooks();
    this.data.peppa = this.cs.getBooks();
    this.data.elephant = this.cs.getBooks();
    this.data.top = this.cs.getBooks();
    this.data.popular = this.cs.getBooks();
    this.actRoute.queryParams.subscribe((param: Params) => {
      const { age } = param;
      this.activeAge = { lower: 0, upper: undefined };
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
    });
  }

  public setDefault() {
    this.activeAge.lower = 6;
    this.activeAge.upper = 9;
  }

  public getBooks(): Book[] {
    return this.cs.getBooks();
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
}
