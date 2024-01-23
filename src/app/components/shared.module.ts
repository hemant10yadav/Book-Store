import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NewArrivalWidgetComponent } from './new-arrival-widget/new-arrival-widget.component';
import { RatingComponent } from './rating/rating.component';
import { WishListButtonComponent } from './wish-list-button/wish-list-button.component';
import { HemantSliderComponent } from './hemant-slider/hemant-slider.component';
import { BrowseByAgeComponent } from './browse-by-age/browse-by-age.component';
import { BookWidgetComponent } from './book-widget/book-widget.component';
import { PopularWidgetComponent } from './popular-widget/popular-widget.component';


@NgModule({
  declarations: [
    NewArrivalWidgetComponent,
    RatingComponent,
    WishListButtonComponent,
    HemantSliderComponent,
    BrowseByAgeComponent,
    BookWidgetComponent,
    PopularWidgetComponent
  ],
  exports: [
    NewArrivalWidgetComponent,
    RatingComponent,
    WishListButtonComponent,
    HemantSliderComponent,
    BrowseByAgeComponent,
    BookWidgetComponent,
    PopularWidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
