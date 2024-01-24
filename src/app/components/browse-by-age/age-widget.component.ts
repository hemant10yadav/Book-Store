import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age-widget',
  templateUrl: './age-widget.component.html',
  styleUrls: ['./age-widget.component.scss'],
})
export class AgeWidgetComponent {
  constructor(private router: Router) {}

  @Input()
  public lowerLimit!: number;

  @Input()
  public upperLimit!: number;

  @Input()
  public active = false;

  public async navToBrowseByAge(lowerLimit: number, upperLimit: number) {
    let age = lowerLimit.toString();
    if (upperLimit) {
      age += `-${upperLimit}`;
    }
    await this.router.navigate(['browse-by-age'], { queryParams: { age } });
  }
}
