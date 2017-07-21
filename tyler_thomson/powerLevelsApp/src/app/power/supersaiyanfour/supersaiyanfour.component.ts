import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit {
  @Input() power;
  @Input() childStyles;
  num1 = 9000;
  num2 = 20000;
  num3 = 50000;
  constructor() { }

  ngOnInit() {
  }

}
