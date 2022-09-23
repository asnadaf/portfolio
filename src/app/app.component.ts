import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio_afif';
  showFiller = false;
  panelOpenState = false;
  giveVal(){
    console.log('hello every one')
  }
}
