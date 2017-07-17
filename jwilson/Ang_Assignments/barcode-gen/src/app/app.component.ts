import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: [string] = ['red','maroon','tomato','orangered','lightcoral','indianred']
  repeats: Array<number> = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  
  randomColor(colors){
    let random_color: string;
    for(let i = 0; i < colors.length; i++){
      random_color = colors[Math.floor(Math.random()* colors.length)]
    }
    return random_color;
  }
}
