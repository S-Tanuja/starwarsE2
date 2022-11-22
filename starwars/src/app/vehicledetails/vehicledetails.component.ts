import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent implements OnInit {
  url='';
  
  vehicledetails:any;
  constructor(public service:StarwarsService) { }

  ngOnInit(): void {
  this.vehicledetails=JSON.parse(localStorage.getItem('vehicledetails')as any);
  }
  getRandomNumber() {
    return (Math.floor(Math.random()*10));
  }
}
