import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  public restaurants: any[] = [];
  public restaurantsSubscription: Subscription;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getAllData();
    this.restaurantsSubscription = this.firebaseService.allDataSubject.subscribe(result => {
      this.restaurants = result;
    });

  }

  deleteItem(value: string) {
    this.firebaseService.deleteData(value);
  }


}