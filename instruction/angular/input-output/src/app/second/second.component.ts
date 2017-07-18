import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  styles = {};
  constructor(private _styleService: StyleService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.styles = this._styleService.getStyles();
    this._route.params.subscribe(param => { 
      console.log(`Route param is ${param.id}`);
      console.log(`param object: `, param);
    })
  }

}
