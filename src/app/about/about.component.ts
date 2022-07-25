import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { CloudageComponent } from '../cloudage/cloudage.component';
import { GppComponent } from '../gpp/gpp.component';
import { HomeComponent } from '../home/home.component';
import { IgtComponent } from '../igt/igt.component';
import { NumberComponent } from '../number/number.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  gpp = false;
  cloudage = false;
  igt = false;
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}
  openBottomSheet(x:number): void {
    if (x==1) {
      this._bottomSheet.open(CloudageComponent);
    }else if(x==2){
      this._bottomSheet.open(GppComponent);
    }else{
      this._bottomSheet.open(IgtComponent);
    }
  }
}
