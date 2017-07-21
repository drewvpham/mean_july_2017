import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {

  constructor() { }
  @Input() power;

  ngOnInit() {

  }

  ngOnChanges() {
    this.power = this.power * 10;
  }

}
