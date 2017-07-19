import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorArray = ['black', 'chartreuse', 'darkslategrey', 'navy', 'teal', 'maroon', 'yellow', 'brown', 'purple', 'grey'];

  shuffleArray() {
  for(let i = 0; i < this.colorArray.length; i++) {
    this.colorArray[i] = this.colorArray[(Math.floor(Math.random() * 10))];
  }
}

  ngOnInit() {
    this.shuffleArray();
  }
}
