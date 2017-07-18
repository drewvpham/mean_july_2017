import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDate: any = new Date();

  currentTime(timezone){
    if(timezone == "PST"){
      this.myDate = this.myDate.setHours(this.myDate.getHours()-2);
    }
    else if(timezone == "MST"){
      this.myDate = this.myDate.setHours(this.myDate.getHours()-1);
    }
    else if(timezone == "CST"){
      this.myDate = new Date;
    }
    else if(timezone == "EST"){
      this.myDate = this.myDate.setHours(this.myDate.getHours()+1);
    }
  }

  reset(){
    this.myDate = new Date();
  }
}
