import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.css']
})
export class FilmdetailsComponent implements OnInit {
  films:any
  load=true;
  unload=false;
  constructor() { }

  ngOnInit(): void {
   this.films=JSON.parse( localStorage.getItem('films')as any)
    console.log(this.films);
    this.load=false;
    this.unload=true;
    
  }
  getRandomNumber() {
    return (Math.floor(Math.random()*10));
  }
}
