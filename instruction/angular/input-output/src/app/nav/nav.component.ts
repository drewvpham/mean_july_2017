import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() styles;
  @Input() links;
  @Output() myEvent = new EventEmitter();
  //links: any[] = [1,2,3,4,5,6,7,8,9,0];

  newLink() {
    console.log('it works');
    this.myEvent.emit({data: 1});
  }

  constructor() { 

  }
  ngOnInit() {
  }

}
