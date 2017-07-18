import { Component, OnInit, Input } from '@angular/core';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  styles = {};
  constructor(private _styleService: StyleService) { }

  name: string = "Layout";

  ngOnInit() {
    this.styles = this._styleService.getStyles();
  }

}
