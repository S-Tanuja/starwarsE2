import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: any;
  time: any;

  temperature: any;
  color = 'no-color';
  text = 'Add to favorite';
  border = 'favorite_border';
  cityWeather: any;
  weatherIcon: any;
  celsius: boolean = true;
  farhan!: boolean;
  cityDetails: any;
  select: any;
  favDetails: any;
  favCity: any;
  display: boolean = false;
  cur: any;
  favr: any;
  cf='cf';
  cff='no-cf';
  constructor(public router:Router) { }

  ngOnInit(): void {

    this.cityDetails = localStorage.getItem('cityWeather');
    this.cityDetails = JSON.parse(this.cityDetails);

    let degree = JSON.parse(localStorage.getItem('degree')as any)
    if(degree == 'cel'){
      this.degCel();
    }
    else{
      this.degFar();
    }
    if (localStorage.getItem('FavCities')) {
      this.select = localStorage.getItem('FavCities')
      this.select = JSON.parse(this.select);
      for (let data of this.select) {
        if (data['name'] == this.cityDetails.name) {
          this.text = 'Added to favourite';
          this.color = 'color';
          this.border = 'favorite';
          break;
        }
        else {
          this.cityDetails = localStorage.getItem('cityWeather');
          this.cityDetails = JSON.parse(this.cityDetails)
          this.text = 'Add to favourite';
          this.color = 'no-color';
          this.border = 'favorite_border';
        }
      }

    }

    localStorage.setItem('auto',JSON.stringify(this.router.url));


    this.date = new Date();

    this.cityWeather = localStorage.getItem("cityWeather");
    this.cityWeather = JSON.parse(this.cityWeather);
    console.log(this.cityWeather);
  }



  fav() {
    this.color == 'no-color' ? this.color = 'color' : this.color = 'no-color';
    this.text == 'Add to favourite' ? this.text = 'Added to favourite' : this.text = 'Add to favourite';
    this.border == 'favorite_border' ? this.border = 'favorite' : this.border = 'favorite_border';

    this.favDetails = localStorage.getItem('cityWeather');
    this.favDetails = JSON.parse(this.favDetails);

    if (this.border == 'favorite') {
      this.addFav(this.favDetails)
    } else {
      this.removeFav(this.favDetails)
    }
  }

  addFav(data: any) {
    let favCities = [];
    let favCity: any;
    if (localStorage.getItem('FavCities')) {
      favCity = localStorage.getItem('FavCities');
      favCities = JSON.parse(favCity);
      favCities = [data, ...favCities];
    }
    else {
      favCities = [data];
    }
    localStorage.setItem('FavCities', JSON.stringify(favCities));
  }

  removeFav(data: any) {
    this.favr = localStorage.getItem('FavCities');
    this.favr = JSON.parse(this.favr);
    for (let f of this.favr) {
      if (f['name'] == data['name']) {
        this.cur = f;
        this.favr.splice(this.favr.indexOf(this.cur), 1);
        // this.favCity = this.fav;
        localStorage.setItem('FavCities', JSON.stringify(this.favr))
        break;
      }
    }
    
  }

  degFar() {
    this.farhan = true;
    this.celsius = false;
    this.cff='cf';
    this.cf = 'no-cf';
    localStorage.setItem('degree',JSON.stringify('far'))
  }
  degCel() {
    this.farhan = false;
    this.celsius = true;
   

    this.cff='no-cf';
    this.cf = 'cf';
    localStorage.setItem('degree',JSON.stringify('cel'))

  }
}



