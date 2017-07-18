import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any = [{
      email: 'bill@gates.com',
      priority: true,
      subject: 'New Windows',
      content: 'Windows XI will launch in year 2100'
    },

    {
      email: 'ada@lovelace.com',
      priority: true,
      subject: 'Programming',
      content: 'Enchantress of Numbers'
    },

    {
      email: 'john@carmac.com',
      priority: false,
      subject: 'Updated Algo',
      content: 'New algorithm for shadow volumes.'
    },

    {
      email: 'gabe@newel.com',
      priority: true,
      subject: 'HL3!!!',
      content: 'Just kidding, but for real though this will break the internet if it ever happens.'
    }

    
    
  
  ]
}