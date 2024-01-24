import { Component, Input } from '@angular/core';
import { NewArrival } from '../../../utils/types';

@Component({
  selector: 'app-new-arrival-widget',
  templateUrl: './new-arrival-widget.component.html',
  styleUrls: ['./new-arrival-widget.component.scss'],
})
export class NewArrivalWidgetComponent {
  @Input()
  public arrival!: NewArrival;

  @Input()
  public index = 0;
}
