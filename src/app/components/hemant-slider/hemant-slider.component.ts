import { Component } from '@angular/core';

@Component({
  selector: 'app-hemant-slider',
  templateUrl: './hemant-slider.component.html',
  styleUrls: ['./hemant-slider.component.scss'],
})
export class HemantSliderComponent {
  public rightVisible: number = 0;

  public right(scrollable: HTMLDivElement): void {
    this.rightVisible = scrollable.scrollLeft;
    scrollable.scrollLeft += 700;
    this.rightVisible += 700;
  }
  public left(scrollable: HTMLDivElement): void {
    scrollable.scrollLeft -= 700;
    this.rightVisible -= 700;
  }
}
