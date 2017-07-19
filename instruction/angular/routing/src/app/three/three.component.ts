import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(param => { 
      console.log('param object: ', param);
      console.log(`The route param is ${param.id}`);
    })
  }
  
}
