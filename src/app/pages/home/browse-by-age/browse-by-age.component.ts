import { Component } from '@angular/core';
import { ContentService } from '../../../service/content.service';
import { Book } from '../../../../utils/types';

@Component({
  selector: 'app-browse-by-age',
  templateUrl: './browse-by-age.component.html',
  styleUrls: ['./browse-by-age.component.scss'],
})
export class BrowseByAgeComponent {
  constructor(private cs: ContentService) {}

  public getBooks(): Book[] {
    return this.cs.getBooks();
  }
}
