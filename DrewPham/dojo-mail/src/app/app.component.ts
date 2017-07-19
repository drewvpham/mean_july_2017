import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Dojo Mail';
  emails: any=[{email:'Drew@gmail.com', important: true, subject: 'testtting', content: 'Where am I??'}]

}
