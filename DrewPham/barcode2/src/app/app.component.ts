import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [];

   fillColors() {
     for (let y = 0; y < 10; y++) {
       this.colors[y] = ('#' + Math.floor(Math.random() * 16777215).toString(16));
     }
   }

   ngOnInit() {
     this.fillColors();
   }

 }
