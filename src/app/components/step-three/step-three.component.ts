import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { COUNTRY } from 'src/app/mocks/country.mock';
import { OrderService } from 'src/app/services/order.service';
import { Location } from 'src/app/models/location';
import { GeosearchService } from 'src/app/services/geosearch.service';



@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  @Output() emitter: EventEmitter<number> = new EventEmitter<number>();

  public countries: any[] = null;
  public locationForm: FormGroup;
  public countryArray = COUNTRY;
  public invalidForm: boolean = false;
  public locationError: boolean = false;
  public ukSpinnerOn: boolean;

  public gMapsCountryName: string;
  public gMapsStreetNumber: number;
  public gMapsStreetName: string;
  public gMapsCityName: string;
  public gMapsPostalCode: string;



  constructor(protected orderService: OrderService,
    private geoSearchService: GeosearchService,
    private formBuilder: FormBuilder) {
    this.countries = this.orderService.Country;
  }

  ngOnInit() {
    this.initLocationForm();
  }


  //public geocodingRequest(streetNumber: number, streetName : string, cityName: string, countryName: string) {
    //return this._http.get(`${this._geoCodingUrl}json?address=${streetNumber}+${streetName}+${cityName}+${countryName}&key=${this._apiKey}`);
  //}

  initLocationForm() {
    this.locationForm = this.formBuilder.group({
      streetName: [this.orderService.Location ? this.orderService.Location.streetName : null, [Validators.required, Validators.maxLength(25)]],
      numberStreet: [this.orderService.Location ? this.orderService.Location.numberStreet : null, [Validators.required, Validators.pattern('^[0-9]{1,5}$')]],
      postalCode: [this.orderService.Location ? this.orderService.Location.postalCode : null, [Validators.required, Validators.pattern('^[0-9]{4,5}$')]],
      cityName: [this.orderService.Location ? this.orderService.Location.cityName : null, [Validators.required, Validators.pattern('^\\w{2,25}$')]],
      countryName: [this.orderService.Location ? this.orderService.Location.countryName : null, [Validators.required, Validators.pattern('^\\w{2,25}$'), this.countryNameValidator]]
    });
  }

  onSubmitLocationForm() {
    const formValue = this.locationForm.value;
    const newLocation = new Location(
      formValue.streetName,
      formValue.numberStreet,
      formValue.postalCode,
      formValue.cityName,
      formValue.countryName
    );
    this.orderService.Location = newLocation;

  }

  async isValid() {
    if (this.locationForm.invalid) {
      this.invalidForm = true;
    } else {
      this.onSubmitLocationForm();
      this.ukSpinnerOn = true;
      if (await this.geoSearchService.searchQuery()) {
        this.onClick(4);
      } else {
        this.locationError = true;
        this.ukSpinnerOn = false;
      }
    }
  }

  onClick(value: number) {
      this.emitter.emit(value);
  }

  public countryNameValidator(control: AbstractControl) {
    const countries = COUNTRY;
    const countryName = control.value;
    return countries.some(c => c.country === countryName)? null : {"countryError":{
      value : false
    }};
 
  }

}
