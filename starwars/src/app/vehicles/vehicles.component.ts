import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let url='https://swapi.dev/api/vehicles/';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  
  vehicles:any;
  load=true;
  noload=false;
  disable='';
  constructor(public service:StarwarsService) { }

  ngOnInit(): void {
    this.service.getvehicles(url).subscribe(vehicles=>{
      this.vehicles=vehicles;
      console.log(this.vehicles);
      this.disable='disable';
      this.load=false;
      this.noload=true;
    })
  }

  vehicledetails(data:any){
    localStorage.setItem('vehicledetails',JSON.stringify(this.vehicles.results[data]));
  }
  prev(duplurl:any){
    this.service.getchar(this.vehicles.previous).subscribe(nxtdata=>{
      this.vehicles=nxtdata;
      url=duplurl;
    })
  }
  next(duplurl:any){
    this.service.getchar(this.vehicles.next).subscribe(nxtdata=>{
      this.vehicles=nxtdata;
      url=duplurl;
    })
  }
  deactivate(){
    if(this.vehicles.previous===null){
      this.disable='disable';
    }else{
      this.disable='';
    }
  }
}
