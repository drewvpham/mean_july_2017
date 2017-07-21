import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit {

  constructor() { }
  @Input() power;

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 90;
  }

}
