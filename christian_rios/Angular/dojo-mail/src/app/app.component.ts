import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: any = [{
    email: 'BILL@GATES.COM',
    importance: true,
    subject: 'New Windows',
    content: 'Windows XI will launch in year 2010.'
  },
  {
    email: 'ADA@LOVELACE.COM',
    importance: true,
    subject: 'Programming',
    content: 'Enchantress of Numbers'
  },
  {
    email: 'JOHN@CARMAC.COM',
    importance: false,
    subject: 'Updated Algo',
    content: 'New algorithm for shadow volumes.'
  },
  {
    email: 'GABE@NEWEL.COM',
    importance: false,
    subject: 'HL3!',
    content: 'Just kidding..'
  }
  ];
}
