import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {ViewChild} from '@angular/core';
let url = 'https://swapi.dev/api/people';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
@ViewChild('reference_variable', { static: true })

export class CharactersComponent implements OnInit {

  dt: any;
  dataDisplay: any;
  loading:boolean=true;
  load=true;
  noload=false;
  constructor(private starService: StarwarsService,private http: HttpClient,@Inject(DOCUMENT) document: Document) { }
  active: boolean = false;
  characters: any;
  disable='';
  // duplurl:any;

  ngOnInit(): void {
    this.starService.getchar(url).subscribe(characters => {
      console.log(characters);
      this.characters = characters;
      this.disable='disable';
      this.load=false;
      this.noload=true;
    })
  }

character(data:any){
  localStorage.setItem('character',JSON.stringify(this.characters.results[data]));
}
prev(duplurl:any){
  this.starService.getchar(this.characters.previous).subscribe(nxtdata=>{
    console.log(nxtdata);
    this.characters = nxtdata;
    url=duplurl;
   
    
    this.load=false;
      this.noload=true;
  })
}
next(duplurl:any){
  this.starService.getchar(this.characters.next).subscribe(nxtdata=>{
    this.characters=nxtdata;
    url=duplurl;
    // if(this.characters.next===null){
    //   this.disable='disable';
    // }else{
    //   this.disable='';
    // }
    console.log(this.characters);
    
    this.load=false;
      this.noload=true;
  })
  
}
deactivate(){
  if(this.characters.previous===null){
    this.disable='disable';
  }else{
    // this.characters=nxtdata;
    this.disable='';
  console.log(this.characters);
  
  }
}
  

}
