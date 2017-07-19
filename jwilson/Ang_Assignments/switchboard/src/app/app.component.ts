import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches: any[] = [true,true,true,true,true,true,true,true,true,true]


  flipper(i){
    this.switches[i] = !this.switches[i];
  }

}

