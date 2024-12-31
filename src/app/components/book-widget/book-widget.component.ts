import { Component, Input } from '@angular/core';
import { Book } from '../../../utils/types';

@Component({
  selector: 'app-book-widget',
  templateUrl: './book-widget.component.html',
  styleUrls: ['./book-widget.component.scss'],
})
export class BookWidgetComponent {
  @Input() public book!: any;
  @Input() public index!: number | null;
  @Input() mode: 'light' | 'dark' = 'light';
}
