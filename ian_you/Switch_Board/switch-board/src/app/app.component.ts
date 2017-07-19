import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switch Board';
  list :object [] = [
    {'status' : false},
    {'status' : false},
    {'status' : false},
    {'status' : false},
    {'status' : false},
    {'status' : false},
    {'status' : false},
    {'status' : false},
    {'status' : false},
    {'status' : false},]

    
  switch_change(index){
    let selected_switch = this.list[index]
    selected_switch['status'] = !selected_switch['status'];
    console.log(selected_switch['status']);
    
  }
}
