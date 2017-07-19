import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dateObj = new Date();
  lastTimeZoneSelected = null;

  getDateByZone(timezone){
    this.dateObj = new Date();
    if (timezone === 'MST'){
      this.dateObj.setHours(this.dateObj.getHours() - 1 );
      } else if( timezone === 'CST'){
        this.dateObj.setHours(this.dateObj.getHours());
      } else if( timezone === 'EST'){
        this.dateObj.setHours(this.dateObj.getHours() + 2);
      } else if( timezone === 'PST'){
        this.dateObj.setHours(this.dateObj.getHours() - 3);
        
      } else if( timezone === 'clear'){
        this.dateObj.setHours(this.dateObj.getHours());
      }

      this.lastTimeZoneSelected = timezone;
  }
}
