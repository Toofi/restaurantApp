import { Injectable } from '@angular/core';
import { RESTAURANTS } from '../mocks/restaurants.mock';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private _restaurants: any[] = RESTAURANTS;
  
  public currentId: number;

  public get Restaurants(){
    return this._restaurants;
  }

  public set Restaurants(value: any[]){
    this._restaurants = value;
  }
  
  public set setCurrentId(value: number) {
    this.currentId = value;
    console.log(this.currentId);
  }

  public get getCurrentId() {
    return this.currentId;
  }

  constructor() { 
  }
}
