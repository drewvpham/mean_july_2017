import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Event Listeners and Forms';

  users: object[] = [];

  user = {
    name: '',
    email: ''
  }

  myButtonEvent(){
    console.log('hey, look what I did!');
  }

  resetUser(){
    this.user = {
      name: '',
      email: ''
    }
  }

  mySubmitEvent() {
    // make an API call to our DB
    this.users.push(this.user);
    this.resetUser();
  }

}
