import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  newFighter= {power: 0};

  constructor() { }

  mySubmitEvent(power){
    console.log(power);
  }

  ngOnInit() {

  }

}
