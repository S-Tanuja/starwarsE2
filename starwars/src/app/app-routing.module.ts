import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharDetailComponent } from './char-detail/char-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { FilmdetailsComponent } from './filmdetails/filmdetails.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { PlanetdetailsComponent } from './planetdetails/planetdetails.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesdetailsComponent } from './speciesdetails/speciesdetails.component';
import { StarshipComponent } from './starship/starship.component';
import { StarshipdetailsComponent } from './starshipdetails/starshipdetails.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'chardetails',component:CharDetailComponent},
  {path:'characters',component:CharactersComponent},
  {path:'people',component:CharactersComponent},
  {path:'films',component:FilmsComponent},
  {path:'species',component:SpeciesComponent},
  {path:'starship',component:StarshipComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'planets',component:PlanetsComponent},
  {path:'',component:HomeComponent},
  {path:'filmdetails',component:FilmdetailsComponent},
  {path:'planetdetails',component:PlanetdetailsComponent},
  {path:'speciesdetails',component:SpeciesdetailsComponent},
  {path:'starshipdetails',component:StarshipdetailsComponent},
  {path:'vehicledetails',component:VehicledetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
