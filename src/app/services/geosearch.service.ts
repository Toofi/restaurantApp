import { Injectable } from '@angular/core';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class GeosearchService {
  public _lat: number;
  public _lng: number;
  public resultSearch: any[] = [];
  public positionIsValid: boolean;
  private geoSearchProvider = new OpenStreetMapProvider();
  private queryString: string;
  private req: { query: string; };


  searchQuery() {
    this.queryString = this.orderService.Location.numberStreet+', '+
                          this.orderService.Location.streetName+', '+
                          this.orderService.Location.postalCode+', '+
                          this.orderService.Location.cityName+', '+
                          this.orderService.Location.countryName;
    this.req = { query: this.queryString };

    return this.searchPosition();
  }

  constructor(private orderService: OrderService) {}

  public async searchPosition() {
     this.resultSearch = await this.geoSearchProvider.search(this.req);
    if(this.resultSearch.length > 0) {
      this._lng = this.resultSearch[0].x;
      this._lat = this.resultSearch[0].y;
      console.log(this.resultSearch[0].label); 
      return true;
    } else {
      console.log("aucune correspondance");
      return false;
    }
  }

}