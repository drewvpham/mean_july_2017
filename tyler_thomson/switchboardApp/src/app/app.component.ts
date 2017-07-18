import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switchboard = [true, true, true, true, true, true, true, true, true, true];

  myClass = true;


  flip(i){
    this.switchboard[i] = !this.switchboard[i];
  }
}
