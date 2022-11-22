import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let url='https://swapi.dev/api/planets/';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

planets:any;
load=true;
noload=false;
disable='';
  constructor(public service:StarwarsService) { }

  ngOnInit(): void {
    this.service.getplanets(url).subscribe(planets=>{
      this.planets=planets;
      console.log(this.planets);
      this.disable='disable';
      this.load=false;
      this.noload=true;
      
    })
  }
  planetdetail(data:any){
   localStorage.setItem('planetdetail',JSON.stringify(this.planets.results[data]))
  }
  prev(duplurl:any){
    this.service.getchar(this.planets.previous).subscribe(nxtdata=>{
      this.planets=nxtdata;
      url=duplurl;
    
    })
  }
  next(duplurl:any){
    this.service.getchar(this.planets.next).subscribe(nxtdata=>{
      this.planets=nxtdata;
      url=duplurl;
    })
  }

  deactivate(){
    if(this.planets.previous===null){
      this.disable='disable';
    }else{
      this.disable='';
    }
  }
}
