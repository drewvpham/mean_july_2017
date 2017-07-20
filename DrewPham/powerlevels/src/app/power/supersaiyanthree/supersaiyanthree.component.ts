import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit {

  constructor() { }
    @Input() power;

  ngOnInit() {
  }
  ngOnChanges() {
    this.power = this.power * 250;
  }

}
