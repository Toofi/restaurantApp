import { Injectable } from '@angular/core';
import { CGU } from '../mocks/cgu.mock';
import { COUNTRY } from '../mocks/country.mock';
import { Company } from '../models/company';
import { Location } from '../models/location';
import { Food, IFood } from '../models/food';
import { IModalForm } from '../models/modalForm';
import { IRestaurants } from '../models/restaurants';
import { FirebaseService } from './firebase.service';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _cgu: any[] = CGU;
  private _company: Company;
  private _location: Location;
  private _food: IFood[] = []; //tableau d'objets Food
  private _country: any[] = COUNTRY;
  private newRestaurant: IRestaurants = {Company :null,Location:null, Food :[]};


  constructor(private firebaseService: FirebaseService) { }

  public get Cgu() {
    return this._cgu;
  }

  public get Company() {
    return this._company;
  }

  public set Company(value: Company) {
    this._company = value;
  }

  public get Location() {
   return this._location;
  }

  public set Location(value: Location) {
   this._location = value;
  }

  public get Food() {
    return this._food;
  }

  public set Food(value: Food[]) {
    this._food = value;
  }

  public get Country() {
    return this._country;
  }

  public set Country(value: any) {
    this._country = value;
  }

  public mergeForms() {
    this.firebaseService.setData(Object.assign({},{
      Company: Object.assign({},this._company),
      Food: this._food.map( food => Object.assign({}, food)),
      Location: Object.assign({},this._location)
    }));
  }

  public clearForm() {
    delete this.Company.companyName;
    delete this.Company.phoneNumber;
    delete this.Company.email;
    delete this.Location.streetName;
    delete this.Location.numberStreet;
    delete this.Location.postalCode;
    delete this.Location.cityName;
    delete this.Location.countryName;
    this.Food = [];

}


}
