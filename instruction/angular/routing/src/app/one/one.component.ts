import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  user_id: number = 0;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(param => { 
      console.log('param object: ', param);
      console.log(`The route param is ${param.id}`);
      this.user_id = param.id;
      //hit our api to get that user's data

      //validate their token
     })
  }

}
