import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speciesdetails',
  templateUrl: './speciesdetails.component.html',
  styleUrls: ['./speciesdetails.component.css']
})
export class SpeciesdetailsComponent implements OnInit {
  
  speciesdetails:any;
  constructor() { }

  ngOnInit(): void {
   this.speciesdetails=JSON.parse( localStorage.getItem('speciesdetails') as any)
  }
  getRandomNumber() {
    return (Math.floor(Math.random()*10));
  }
}
