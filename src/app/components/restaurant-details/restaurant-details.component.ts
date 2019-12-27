import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import {  ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {

  public currentId: string = null;
  public restaurant: any = null;
  public ukSpinnerOn: boolean = true;

  

  constructor(private firebaseService: FirebaseService,
    private root: ActivatedRoute) { }

  ngOnInit() {
    this.root.params.subscribe(result => {
      this.currentId = result ? result["id"] : null;
      console.log(this.currentId);
      this.getRestaurant(this.currentId);
      
    });
  }




  public async getRestaurant(urlId: string) {  
    this.ukSpinnerOn = true;
    this.restaurant =  await this.firebaseService.getOneData(urlId); 
    this.ukSpinnerOn = false;
  }
}