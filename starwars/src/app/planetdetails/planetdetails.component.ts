import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetdetails',
  templateUrl: './planetdetails.component.html',
  styleUrls: ['./planetdetails.component.css']
})
export class PlanetdetailsComponent implements OnInit {
  planetdetail:any;
  load=true;
  noload=false;
  constructor() { }

  ngOnInit(): void {
    this.planetdetail =JSON.parse(localStorage.getItem('planetdetail') as any);
    console.log(this.planetdetail);
    this.load=false;
    this.noload=true;
    
  }
  getRandomNumber() {
    return (Math.floor(Math.random()*10));
  }
}
