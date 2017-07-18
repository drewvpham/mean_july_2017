import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StyleService } from '../style.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  styles = {};

  constructor(private _styleService: StyleService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.styles = this._styleService.getStyles()
    this._route.params.subscribe(param => {
      console.log(`Route param is ${param.id}`);
      console.log(`param object: `, param);
    })
  }

  ngOnDestroy() {
    this._route.params.unsubscribe()
  }

}
