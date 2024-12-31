import { Component, Input } from '@angular/core';
import { Book } from '../../../utils/types';

@Component({
  selector: 'app-popular-widget',
  templateUrl: './popular-widget.component.html',
  styleUrls: ['./popular-widget.component.scss'],
})
export class PopularWidgetComponent {
  @Input() public book!: any;
  @Input() mode: 'light' | 'dark' = 'light';
}
