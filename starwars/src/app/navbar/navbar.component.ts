import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  active = 'active';
  active1= '';
  active2= '';
  active3= '';
  active4= '';
  active5= '';
  active6= '';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  det() {
    if (this.router.url == '/chardetails') {
      this.active1 = 'active';
      this.active2 = '';
      this.active3 = ''
      this.active4 = '';
      this.active5 = '';
      this.active6 = '';
    } else if (this.router.url == '/filmdetails') {
      this.active1 = '';
      this.active2 = 'active';
      this.active3 = ''
      this.active4 = '';
      this.active5 = '';
      this.active6 = '';
    } else if (this.router.url == '/planetdetails') {
      this.active3 = 'active';
      this.active2 = '';
      this.active1 = ''
      this.active4 = '';
      this.active5 = '';
      this.active6 = '';
    } else if (this.router.url == '/speciesdetails') {
      this.active4 = 'active';
      this.active2 = '';
      this.active3 = ''
      this.active1 = '';
      this.active5 = '';
      this.active6 = '';
    } else if (this.router.url == '/vehicledetails') {
      this.active5 = 'active';
      this.active2 = '';
      this.active3 = ''
      this.active4 = '';
      this.active1 = '';
      this.active6 = '';
    } else if (this.router.url == '/starshipdetails') {
      this.active6 = 'active';
      this.active2 = '';
      this.active3 = ''
      this.active4 = '';
      this.active5 = '';
      this.active1 = '';
    }
    
  }
}
