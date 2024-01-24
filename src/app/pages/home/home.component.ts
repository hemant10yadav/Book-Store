import { Component } from '@angular/core';
import { Book, NewArrival } from '../../../utils/types';
import * as stream from 'stream';
import { ContentService } from '../../service/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private cs: ContentService,
    private router: Router,
  ) {}

  public getBooks(): Book[] {
    return this.cs.getBooks();
  }

  public getNewArrivals(): NewArrival[] {
    return this.cs.newArrivals;
  }

  public navToBrowseByAge(lowerLimit: number, upperLimit?: number): void {
    this.router.navigate(['browse-by-age'], {
      state: {
        lowerLimit,
        upperLimit,
      },
    });
  }
}
