import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Switchboard';
  switches: boolean[]= [true,true,true,true,true,true,true,true];
  flipSwitch(idx): void{
     this.switches[idx] = !this.switches[idx];
     console.log(this.switches)
  }
}
