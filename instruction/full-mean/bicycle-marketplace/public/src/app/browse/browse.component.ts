import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  bikes:any[] = [];
  currentUser = {};
  constructor(private _bikeService:BikeService, private _userService:UserService, private _router:Router) {
    this.currentUser = this._userService.getCurrentUser();
    this.getBikes()
   }

  getBikes(){ 
    return this._bikeService.getBikes()
    .then(data => {
      console.log(data);
      this.bikes = data;
      for(let bike of this.bikes){
        bike.display = false;
      }
    })
    .catch(err => { console.log(err) });
  }

  alertUserInfo(idx){
    this.bikes[idx].display = true;
  }

  hideUserInfo(idx){
    this.bikes[idx].display = false;
  }

  destroyBike(id:string, idx) {
    return this._bikeService.destroyBike(id)
    .then(bike => {
      this.bikes.splice(idx, 1);
    })
    .catch(err => { console.log(err) })
  }

  logout() {
    this._userService.logout();
    this._router.navigateByUrl('/');
  }

  ngOnInit() {
    this.getBikes();
  }

}
