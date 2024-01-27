import { Component, Input } from '@angular/core';
import { Book } from '../../../utils/types';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss'],
})
export class SearchWidgetComponent {
  @Input()
  public book!: Book;
  public categories: any;
}
