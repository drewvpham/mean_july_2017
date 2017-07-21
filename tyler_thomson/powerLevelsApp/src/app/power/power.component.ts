import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power: Object = {human:{}};
  initPower(){
    let pRange: number[] = [];
    for(let i = 1; i <= 100; i++){
      pRange.push(i);
    }
    return pRange;
  }
  constructor() { }

  pRange = this.initPower();

  calcPower(level){
    console.log(level);
    level.human = level.level;
    level.saiyan = level.human * 10;
    level.supersaiyan = level.human * 90;
    level.supersaiyantwo = level.human * 150;
    level.supersaiyanthree = level.human * 250;
    level.supersaiyanfour = level.human * 500;
    this.power = level;
  }

  childStyles: Object = {
    'display': 'inline-block',
    'vertical-align': 'top',
    'width': '33%'
  }

  ngOnInit() {
    this.initPower()
  }
}
