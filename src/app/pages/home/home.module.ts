import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from "../../components/shared.module";
import { BrowseByAgeComponent } from './browse-by-age/browse-by-age.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [HomeComponent, BrowseByAgeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, InfiniteScrollModule]
})
export class HomeModule {}
