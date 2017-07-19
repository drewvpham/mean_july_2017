import { Component } from '@angular/core';
import { APIService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  score: number = 0;
  newUser: object={}
  error_msg: string='';

  onSubmit(newUser){
    this.error_msg='';
    this.score=0;
    console.log(newUser)
    console.log('working');
    this._api.getUser(newUser.username)
    .then(output=>{console.log(output)
    this.score=output.public_repos + output.followers;
    })
    .catch(err => {console.log(err)
    this.error_msg='Invalid username'})
    // return false;
  }

  constructor(private _api: APIService){

  }
}
