import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isApiLoaded = false;
  options: any = {
    componentRestrictions: { country: 'IN' }
  }

  constructor(
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() =>{
      this.isApiLoaded = true
    })
  }

  handleAddressChange(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())
  }
}
