import { Component } from '@angular/core';
import { Book, NewArrival } from '../../../utils/types';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private cs: ContentService) {}

  public getBooks(): Book[] {
    return this.cs.getBooks();
  }

  public getNewArrivals(): NewArrival[] {
    return this.cs.newArrivals;
  }
}
