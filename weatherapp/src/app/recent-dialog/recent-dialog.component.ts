import { Component, OnInit } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-recent-dialog',
  templateUrl: './recent-dialog.component.html',
  styleUrls: ['./recent-dialog.component.css']
})
export class RecentDialogComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  yes(){
    localStorage.removeItem('Cities');
    window.location.reload();
  }
  
}
