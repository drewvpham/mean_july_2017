import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class NoteService {

  constructor(private _http:Http) { }

  getNotes(){
    return this._http.get('/notes').map(data => data.json()).toPromise()

  }

  create(note){
    return this._http.post('/notes', note).map(data => data.json()).toPromise()
  }

}
