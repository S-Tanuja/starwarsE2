import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let url='https://swapi.dev/api/species/';
@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  
  species:any;
  load=true;
  noload=false;
  disable='';
  constructor(public service:StarwarsService) { }

  ngOnInit(): void {
    this.service.getspecies(url).subscribe(species=>{
      this.species=species;
      console.log(this.species);
      // this.disable='disable';
      this.load=false;
      this.noload=true;
    })
  }

speciesdetails(data:any){
  localStorage.setItem('speciesdetails',JSON.stringify(this.species.results[data]));
}
prev(duplurl:any){
  this.service.getchar(this.species.previous).subscribe(nxtdata=>{
    this.species=nxtdata;
    url=duplurl;
    
  })
}
next(duplurl:any){
  this.service.getchar(this.species.next).subscribe(nxtdata=>{
    this.species=nxtdata;
    url=duplurl;
  })
}
deactivate(){
  if(this.species.previous===null){
    this.disable='disable';
  }else{
    this.disable='';
  
  }
}
}
