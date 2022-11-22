import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.css']
})
export class CharDetailComponent implements OnInit {
  characters: any;
load=true;
unload=false;
  constructor() { }

  ngOnInit(): void {
    this.load=false;
    this.unload=true;
    this.characters=JSON.parse(localStorage.getItem('character') as any);
  }
  getRandomNumber() {
    return (Math.floor(Math.random()*10));
  }

}
