import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguiMapModule } from '@ngui/map';

import { GoogleMapsConfig } from "./config/googlemaps.config";

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    NguiMapModule.forRoot({ 
      apiUrl: `https://maps.google.com/maps/api/js?key=${GoogleMapsConfig.API_KEY}&libraries=${GoogleMapsConfig.LIBRARIES.join(",")}` 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
