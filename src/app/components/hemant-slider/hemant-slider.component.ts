import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hemant-slider',
  templateUrl: './hemant-slider.component.html',
  styleUrls: ['./hemant-slider.component.scss'],
})
export class HemantSliderComponent {
  public rightVisible: number = 0;
  @Input() public width: number = window.screen.width / 2;
  @Input() public gap: '5rem' | '1rem' | '2rem' | '3rem' | '7rem' = '5rem';

  public right(scrollable: HTMLDivElement): void {
    this.rightVisible = scrollable.scrollLeft;
    scrollable.scrollLeft += this.width;
    this.rightVisible += this.width;
  }
  public left(scrollable: HTMLDivElement): void {
    scrollable.scrollLeft -= this.width;
    this.rightVisible -= this.width;
  }

  public scroll($event: Event): void {
    const scrollable = $event.target as HTMLDivElement;
    this.rightVisible = scrollable.scrollLeft;
  }
}
