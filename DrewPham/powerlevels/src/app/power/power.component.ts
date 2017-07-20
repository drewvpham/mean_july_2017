import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power: number

  constructor() { }

  ngOnInit() {
    this.power = 10;
  }

}
