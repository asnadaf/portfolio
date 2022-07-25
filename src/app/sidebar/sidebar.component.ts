import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { NumberComponent } from '../number/number.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private di:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.di.open(NumberComponent);
  }

}
