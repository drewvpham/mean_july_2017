import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() styles;
  @Input() quick_links;

  links: any[] = [1,2,3,4,5]

  constructor() {
    console.log(this.quick_links, 'hi');
  }
  ngOnInit() {
  }

}
