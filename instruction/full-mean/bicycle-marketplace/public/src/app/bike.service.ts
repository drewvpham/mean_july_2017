import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BikeService {

  constructor(private _http: Http) { }

  getBikes() {
    return this._http.get('/bikes').map(data => data.json()).toPromise()
  }

  updateBike(bike){
    return this._http.patch(`/bikes/${bike._id}`, bike).map(data => data.json()).toPromise();
  }

  destroyBike(id:string) {
    return this._http.delete(`/bikes/${id}`).map(data => data.json()).toPromise();
  }

  createBike(newBike) {
    console.log(newBike)
    return this._http.post('/bikes', newBike).map(data => data.json()).toPromise()
  }
  
}
