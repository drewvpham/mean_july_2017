import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date()
  title = 'Time Zone Display';
  today=null
  zone=null

  changeZone(timezone){
    this.time=new Date();
    if (timezone === 'PST') {
      this.time.setHours(this.time.getHours() - 2);
      console.log(this.time);
    }
    if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() - 1);
      console.log(this.time);
    }
    if (timezone === 'EST') {
      this.time.setHours(this.time.getHours() + 1);
      console.log(this.time);
    }
    if (timezone === 'CST') {
      this.time.setHours(this.time.getHours() - 2);
      console.log(this.time);
    }
    this.zone=timezone
    console.log(this.zone)

}


  reset(){
    this.time = new Date();
    this.zone = null;
  }
}
