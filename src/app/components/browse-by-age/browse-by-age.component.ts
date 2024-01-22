import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-browse-by-age',
  templateUrl: './browse-by-age.component.html',
  styleUrls: ['./browse-by-age.component.scss'],
})
export class BrowseByAgeComponent {
  @Input()
  public lowerLimit!: number;

  @Input()
  public upperLimit!: number;
}
