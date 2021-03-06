import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NguiMapModule } from '@ngui/map';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { GoogleMapsConfig } from "./config/googlemaps.config";

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BasketComponent } from './components/basket/basket.component';
import { PointNavigationComponent } from './components/map/point-navigation/point-navigation.component';

import { routes } from "./app.routes";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { BasketItemsComponent } from './components/basket/components/basket-items/basket-items.component';
import { BasketNetComponent } from './components/basket/components/basket-net/basket-net.component';
import { DragDirective } from './directives/drag.directive';
import { DropDirective } from './directives/drop.directive';
import { UniquePipe } from './pipes/unique.pipe';
import { CompaniesComponent } from './components/companies/companies.component';


import { CompaniesService } from "./services/companies.service";
import { OnlyEnglishDirective } from './components/companies/validators/only-english.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PointNavigationComponent,
    BasketComponent,
    PageNotFoundComponent,
    TopNavigationComponent,
    BasketItemsComponent,
    BasketNetComponent,
    DragDirective,
    DropDirective,
    UniquePipe,
    CompaniesComponent,
    OnlyEnglishDirective
  ],
  imports: [
    BrowserModule,
    NguiMapModule.forRoot({
      apiUrl: `https://maps.google.com/maps/api/js?key=${GoogleMapsConfig.API_KEY}&libraries=${GoogleMapsConfig.LIBRARIES.join(",")}`
    }),
    RouterModule.forRoot(routes, { }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
