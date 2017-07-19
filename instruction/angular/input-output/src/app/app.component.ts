import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Layout';

  links: any[] = ['main', 'second', 'third'];

  quickLinks: any[] = [
    'About',
    'Contact Us',
    'Complaints',
    'Home'
  ]
  styles: object = {
    container_style: {
      'background': '#96B5D9',
      'border': '2px solid black',
      'padding': '5px',
      'margin': '25px',
      'vertical-align': 'top'
    },
    component_title: {
      'margin': '0'
    }
  }

  newLink(event) {
    this.links.push(event.data);
    console.log(event);
    console.log('on the parent component');
  }
  
}

