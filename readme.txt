Requirement:
In typescript working with angular 6,
i needed to make a async function which respond with current countryCode based on users geoLocation.
So here I am using nevigator get the current lat lng.
Its not possible to get the country code directly from nevigator. SO i needed googleMapsApi
By using import { MapsAPILoader } from '@agm/core';
I am able to get the address_components from google responce and filtering it to get the current country Short name.
This i a going to use in 
ng2TelInput => https://www.npmjs.com/package/ng2-tel-input
which is used to add dial code in phone number but requires country code to auto populate.


User below async function to upadte any typescript variable.
In my login component

country_code:any = 'US';

ngOnInit() {
    this.getCurrentCountry();
}

async getCurrentCountry(){
  this.country_code = await this.gs.getCurrentCountry();
  console.log(this.country_code);
}

