import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starshipdetails',
  templateUrl: './starshipdetails.component.html',
  styleUrls: ['./starshipdetails.component.css']
})
export class StarshipdetailsComponent implements OnInit {
  starshipdetails:any;
  constructor() { }

  ngOnInit(): void {
    this.starshipdetails=JSON.parse(localStorage.getItem('starshipdetails')as any);
  }
  getRandomNumber() {
    return (Math.floor(Math.random()*10));
  }
}
