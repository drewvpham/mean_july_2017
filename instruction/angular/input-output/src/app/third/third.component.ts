import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
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
