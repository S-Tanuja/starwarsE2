import { Component, OnInit } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-dialog',
  templateUrl: './fav-dialog.component.html',
  styleUrls: ['./fav-dialog.component.css']
})
export class FavDialogComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
   
  }
  backtofav(){
    this.router.navigate(['/favourite']);
  }
  yes(){
    localStorage.removeItem('FavCities');
    window.location.reload();
  }

}
