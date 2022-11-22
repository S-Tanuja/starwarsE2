import { Component, OnInit } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RecentDialogComponent } from '../recent-dialog/recent-dialog.component';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {

  date:any;
  time:any;
  recentCity:any;
  display:boolean=false;
  fav=false;
  favBorder=true;
  favs:any;

  favCity: any;
  display1: boolean = false;
  fav1: any;
  cur: any;
  fCity: any;
  filled='filled';
  constructor(public dialog:MatDialog,public router:Router ) { }

  ngOnInit(): void {
    this.date=new Date();
    this.recentCity=localStorage.getItem('Cities');
    this.recentCity=JSON.parse(this.recentCity);
    console.log(this.recentCity);
    localStorage.setItem('auto',JSON.stringify(this.router.url));

    this.favs=JSON.parse(localStorage.getItem('FavCities') as any)
  }
  recentDialog(){
    this.dialog.open(RecentDialogComponent,{height:'25%',width:'45%'});
  }
  backToHome(){
    this.router.navigate(['/home'])
  }
  goBack(data:any){
    localStorage.setItem('cityWeather',JSON.stringify(data));
    this.router.navigate(['home']);
  }
  check(name:any){
    for(let f of this.favs){
      if(f.name==name){
        this.fav=true;
        this.favBorder=false;
        break;
      }else{
        this.fav=false;
        this.favBorder=true;
      }
    }
  }

  addDisPlace(data:any){
    let cities=[];
    let cityNeeded:any;
    let displace:any;
    let current:any;
  
    if(localStorage.getItem('Cities')){
      displace=localStorage.getItem('Cities');
      cities=JSON.parse(displace);
  
      current = cities.find((cur:any) => {
          return cur.name == data.name;
      })
  
      if(current == undefined){
        cities = [data,...cities];
      }else{
        cities.splice(cities.indexOf(current),1);
        cities = [data,...cities]
      }
    }
    else{
      cities=[data];
    }
    localStorage.setItem('Cities',JSON.stringify(cities));
  }

  removeFav(data: any) {
    this.fav1 = localStorage.getItem('FavCities');
    this.fav = JSON.parse(this.fav1);
    for (let f of this.fav1) {
      if (f['name'] == data) {
        this.cur = f;
        this.fav1.splice(this.fav1.indexOf(this.cur), 1);
        this.favCity = this.fav1;
        localStorage.setItem('FavCities', JSON.stringify(this.favCity))
        break;
      }
    }
    
  }

}
