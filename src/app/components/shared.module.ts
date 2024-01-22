import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NewArrivalWidgetComponent } from './new-arrival-widget/new-arrival-widget.component';
import { RatingComponent } from './rating/rating.component';
import { WishListButtonComponent } from './wish-list-button/wish-list-button.component';


@NgModule({
  declarations: [
    NewArrivalWidgetComponent,
    RatingComponent,
    WishListButtonComponent
  ],
  exports: [
    NewArrivalWidgetComponent,
    RatingComponent,
    WishListButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
