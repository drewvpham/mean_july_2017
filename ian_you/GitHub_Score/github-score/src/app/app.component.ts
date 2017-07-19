import { Component } from '@angular/core';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  score :any = ''
  user :object = {};
  error_msg : string = '';


  onSubmit(user){
    this.error_msg = '';
    console.log("Inside onSubmit method");
    console.log(user);

    return this._api.getUser(user.username)
    .then(output => { 
      console.log(output)
      this.score= output.public_repos + output.followers
    } )
    .catch(err => {
      console.log(err)
      this.error_msg="Your username is invalid. Pick a different GitHub username"
    } )
        
  }
  constructor(private _api: APIService) {
    
  }
}

