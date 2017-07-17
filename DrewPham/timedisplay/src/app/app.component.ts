import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Time Zone Display';


  displayTime(){
    var time = new Date()
    console.log(time)
  }


  num = 1;
	logNum(){
		console.log("num is: ", this.num);
	}
}
