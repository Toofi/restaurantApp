import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {
  public valueString: string = "";
  @Input("formGroup") public formGroup: FormGroup;
  @Input("name") public name: string;
  @Input("inputArray") public dataArray: any[];
  public transformArray: any[] = [];

  constructor() { }

  ngOnInit() {
    this.formGroup.get(this.name).valueChanges.subscribe(result => {
        this.getSuggests();
    })
  }

  getSuggests() {
    this.transformArray = this.dataArray.filter(c => c.country.toLowerCase().indexOf(this.formGroup.get(this.name).value.toLowerCase()) !== -1)
  }

  setName(clickLink) {
    this.formGroup.get(this.name).patchValue(clickLink);
  }

  isEqual() {
    return this.dataArray.some(c => c.country.toLowerCase() === this.formGroup.get(this.name).value.toLowerCase());
  }

}
