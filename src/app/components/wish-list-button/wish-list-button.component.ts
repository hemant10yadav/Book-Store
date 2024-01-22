import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrls: ['./wish-list-button.component.scss'],
})
export class WishListButtonComponent {
  @Input() public buttonWidth = 'w-218';
  @Input() public color: 'blue' | 'white' = 'blue';
  @Input() public topMargin = 'mt-0';
}
