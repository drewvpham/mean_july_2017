import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(param => { 
      console.log('param object: ', param);
      console.log(`The route param is ${param.id}`);
     })
  }

}
