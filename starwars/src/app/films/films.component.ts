import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let url1='https://swapi.dev/api/films/';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
 
 films:any;
 load=true;
 noload=false;
 disable='';

  constructor(public service:StarwarsService) { }

  ngOnInit(): void {
    this.service.getfilms(url1).subscribe(films=>{
      console.log(films);
      this.films=films;
      this.disable='disable';
      this.load=false;
      this.noload=true;
    })
  }
  filmdetail(data:any){
    localStorage.setItem('films',JSON.stringify(this.films.results[data]))
  }
  prev(duplurl1:any){
    this.service.getchar(this.films.previous).subscribe(nxtdata=>{
      this.films=nxtdata;
      url1=duplurl1;
    })
  }
  next(duplurl1:any){
    this.service.getchar(this.films.next).subscribe(nxtdata=>{
      this.films=nxtdata;
      url1=duplurl1;
    })
  }
  deactivate(){
    if(this.films.previous===null){
      this.disable='disable';
    }else{
      this.disable='';
      // this.films=nxtdata;
    }
  }
  
 }

