import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstantAssetsComponent } from './constant-assets/constant-assets.component';
import { FavDialogComponent } from './fav-dialog/fav-dialog.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';

let auto:any;
auto = JSON.parse(localStorage.getItem('auto') as any)

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'constantAssets',component:ConstantAssetsComponent},
  {path:'home',component:HomeComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'recents',component:RecentSearchComponent},
  {path:'favDialog',component:FavDialogComponent},
  {path:'' ,redirectTo: auto, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
