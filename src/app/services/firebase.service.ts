import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Company } from '../models/company';
import { Location } from '../models/location';
import { Food, IFood } from '../models/food';
import { IRestaurants, ITableRestaurants } from '../models/restaurants';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public database: AngularFirestoreCollection<any>;
  allDataSubject = new Subject<any[]>();
  public restaurants;

  constructor(private _afs: AngularFirestore) {
 
  }

  public setData(newRestaurant: IRestaurants) {
    let tmpSetDatabase = this._afs.collection('Restaurants');
    tmpSetDatabase.add(newRestaurant);
    this.getAllData();
  }

  public getAllData() {
    let dataArray: any[] = [];
    let tmpAllDatabase = this._afs.collection('Restaurants').get().toPromise().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let restaurant = { id: doc.id, restaurant: doc.data()};
        
        dataArray.push(restaurant);
      });
      this.allDataSubject.next(dataArray);
    })
    // return dataArray;
  }

  public getOneData(indexValue: string){
    let data: any;
    let tmpDatabase = this._afs.collection('Restaurants').doc(indexValue);
    console.log(tmpDatabase);
    return tmpDatabase.get().toPromise().then(result => {
      data = result.data();
      console.log(data);
      return data;
    }).catch(err => console.error(err));
  }

  public deleteData(indexValue: string) {
    let tmpDatabase = this._afs.collection('Restaurants').doc(indexValue).delete();
    this.getAllData();

  }

}