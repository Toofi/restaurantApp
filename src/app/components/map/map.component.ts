import { Component, OnInit} from '@angular/core';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { OrderService } from 'src/app/services/order.service';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
public streetName: string;
public streetNumber: number;
public postalCode: number;
public cityName: string;
public countryName: string;

  //x : longitude, y : latitude
  public _lat: number;
  public _lng: number;
  geoSearchProvider = new OpenStreetMapProvider();

  queryString: string = this.orderService.Location.numberStreet+', '+this.orderService.Location.streetName+', '+this.orderService.Location.postalCode+', '+this.orderService.Location.cityName+', '+this.orderService.Location.countryName;

  req = { query: this.queryString};
  
  constructor(protected orderService: OrderService) { }

  ngOnInit() {
    this.searchPosition();
    console.log(this.queryString);
  }

  // concatQueryString() {
  //   this.queryString = this.streetNumber+', '+this.streetName+', '+this.postalCode+', '+this.cityName+', '+this.countryName;
  // }
    
  private async searchPosition() {
    let result = await this.geoSearchProvider.search(this.req);
    console.log(result);
    this._lng = result[0].x;
    this._lat = result[0].y;
    console.log(result[0].label);
    
    this.loadMap();
  }

  private async loadMap() {
    const map = await L.map('map').setView([this._lat, this._lng], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { subdomains: ['a', 'b', 'c'] }).addTo(map);
  console.log(this._lng);
  console.log(this._lat);
  }
}
