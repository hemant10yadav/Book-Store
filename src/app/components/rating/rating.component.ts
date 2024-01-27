import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input()
  public ratings!: string;
  @Input()
  public user!: number;

  @Input()
  size: 'sm' | 'lg' = 'lg';

  public getEvalClass(trueCond: string, falseCond: string): any {
    return this.size === 'sm' ? trueCond : falseCond;
  }
}
