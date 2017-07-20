import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  newBike = {};
  currentUser = {_id: 0, bikes: []};
  bikeErrors:string[] = [];
  displayBike = {};

  constructor(private _bikeService:BikeService, private _userService:UserService, private _router:Router) { 
    this.setCurrentUser();
    this._userService.show(this.currentUser._id)
    .then(user => { this.currentUser = user; })
    .catch(err => { console.log(err); });
    console.log(this.currentUser);
  }

  setCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
  }

  destroyBike(id:string, idx) {
    return this._bikeService.destroyBike(id)
    .then(bike => {
      this.currentUser.bikes.splice(idx, 1);
    })
    .catch(err => { console.log(err) })
  }

  logout() {
    this._userService.logout();
    this._router.navigateByUrl('/');
  }
  
  updateBike(bike) {
    return this._bikeService.updateBike(bike)
    .then(bike => {  
      console.log(bike);
    })
    .catch(err => { console.log(err) })
  }

  createBike(newBike) {
   newBike.user = this.currentUser._id;
   return this._bikeService.createBike(newBike)
   .then(bike => { 
     if(bike.errors){ 
       for(let key in bike.errors){
        let error = bike.errors[key];
        this.bikeErrors.push(error.message);
       }
     } else {
       //push Bike object to currentUser.bikes
       this.currentUser.bikes.push(bike);

       //or make an API call?
     }
   })
   .catch(err => { console.log(err) });
  }

  ngOnInit() {
    //go get session data here and attach to the controller
  }

}
