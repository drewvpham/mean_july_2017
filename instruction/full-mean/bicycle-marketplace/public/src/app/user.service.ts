import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  storeCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  create(newUser){ 
    return this._http.post('/users', newUser).map(data => data.json()).toPromise();
  }

  show(id:number) {
    return this._http.get(`/users/${id}`).map(data => data.json()).toPromise();
  }

  session(){
    return this._http.get('/session').map(data => data.json()).toPromise()
  }

  authenticate(loginUser){
    console.log(loginUser);
    return this._http.post('/session', loginUser).map(data => data.json()).toPromise()
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
