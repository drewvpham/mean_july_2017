import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  today = new Date();
  zone = null;

  changeTo(timezone) {
    this.today = new Date();
    if (timezone === 'PST') {
      this.today.setHours(this.today.getHours() - 2);
      console.log(this.today);
    } else if (timezone === 'MST') {
      this.today.setHours(this.today.getHours() - 1);
      console.log(this.today);
    } else if (timezone === 'EST') {
      this.today.setHours(this.today.getHours() + 1);
      console.log(this.today);
    } else if (timezone === 'CST') {
      this.today = new Date();
      console.log(this.today);
    }
    this.zone = timezone;
    console.log(this.zone);
    
  }

  reset(){
    this.today = new Date();
    this.zone = null;
  }
  
}
