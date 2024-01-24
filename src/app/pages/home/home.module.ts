import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from "../../components/shared.module";
import { BrowseByAgeComponent } from './browse-by-age/browse-by-age.component';

@NgModule({
  declarations: [HomeComponent, BrowseByAgeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
