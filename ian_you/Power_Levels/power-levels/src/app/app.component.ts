import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  power: object = {  };
  
  PowerGenerator = function(){
    let powerRange : any[] = [];
    for (let i = 100; i >= 1; i--){
      powerRange.push(i);
    }
    return powerRange;
  }

  powerRange = this.PowerGenerator();

  calculate(initial){
    initial.human = initial.initial
    initial.saiyan = initial.human*10;
    initial.super_saiyan = initial.human*90;
    initial.super_saiyan_two = initial.human*150;
    initial.super_saiyan_three = initial.human*250;
    initial.super_saiyan_four = initial.human*500;
    console.log(initial);
    this.power = initial;
  }

  subCompStyles = {
    'display' : 'inline-block',
    'vertical-align' : 'top',
    'width' : '250px',
    'height' : '150px',
    'padding' : '5px',
    'border' : '1px solid black',
    'background-color' : 'orange',
    'margin' : '10px 10px',
    'text-align' : 'left',
  }
  
}
