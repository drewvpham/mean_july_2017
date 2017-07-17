import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: any[] = [1,2,3,4,5]
  quick_links: any[]=[
    'About',
    'Contact Us',
    'Home'
  ]
  title = 'app';

  styles: object={
    container_styles:{
      'background': '#96b5d9',
      'border': '2px solid black',
      'padding': '5px',
      'margin': '25px',
      'vertical-align': 'top'
    },
    component_title:{
      'margin': '0'
    }
  }
}
