import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let url='https://swapi.dev/api/starships/';
@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  
  starships:any;
  load=true;
  noload=false;
  disable='';
  constructor(public service:StarwarsService) { }

  ngOnInit(): void {
    this.service.getstarships(url).subscribe(starships=>{
      this.starships=starships;
      this.disable='disable';
      console.log(this.starships);
      this.load=false;
      this.noload=true;
    })
  }
  starshipdetails(data:any){
    localStorage.setItem('starshipdetails',JSON.stringify(this.starships.results[data]));
  }
  prev(duplurl:any){
    this.service.getchar(this.starships.previous).subscribe(nxtdata=>{
      this.starships=nxtdata;
     url=duplurl;
    })
  }
  next(duplurl:any){
    this.service.getchar(this.starships.next).subscribe(nxtdata=>{
      this.starships=nxtdata;
      url=duplurl;
    })
  }
  deactivate(){
    if(this.starships.previous===null){
      this.disable='disable';
    }else{
      this.disable='';
    }
  }
}
