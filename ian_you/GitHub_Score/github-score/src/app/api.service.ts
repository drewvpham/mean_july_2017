import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //import Http and 'rxjs'
import 'rxjs'

@Injectable()
export class APIService {

  constructor(private _http: Http) {  } // setup constructor

  getUser(username) {
    console.log('in the service');
    
    return this._http.get(`https://api.github.com/users/${username}`).map(data=>data.json()).toPromise(); //api request and result 
  }
}
