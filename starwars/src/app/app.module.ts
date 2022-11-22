import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
   
  
import { FormsModule } from 
    '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstAssetsComponent } from './const-assets/const-assets.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CharactersComponent } from './characters/characters.component';
import { CharDetailComponent } from './char-detail/char-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipComponent } from './starship/starship.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesdetailsComponent } from './speciesdetails/speciesdetails.component';
import { FilmdetailsComponent } from './filmdetails/filmdetails.component';
import { StarshipdetailsComponent } from './starshipdetails/starshipdetails.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { PlanetdetailsComponent } from './planetdetails/planetdetails.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { StarwarsService } from './starwars.service';
import { IstarwarsInterceptor } from './istarwars.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ConstAssetsComponent,
    HomeComponent,
    FooterComponent,
    CharactersComponent,
    CharDetailComponent,
    NavbarComponent,
    FilmsComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipComponent,
    VehiclesComponent,
    SpeciesdetailsComponent,
    FilmdetailsComponent,
    StarshipdetailsComponent,
    VehicledetailsComponent,
    PlanetdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StarwarsService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : IstarwarsInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
