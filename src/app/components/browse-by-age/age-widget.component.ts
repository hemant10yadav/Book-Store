import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-age-widget',
  templateUrl: './age-widget.component.html',
  styleUrls: ['./age-widget.component.scss'],
})
export class AgeWidgetComponent {
  @Input()
  public lowerLimit!: number;

  @Input()
  public upperLimit!: number;
}
