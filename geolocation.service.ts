import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
// import {} from 'googlemaps';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private mapsAPILoader: MapsAPILoader,
  ) { }

  async getCurrentCountry(){
    return  await  new Promise((resolve,reject)=>{
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition( async (position) => {
          // console.log(position);
          this.mapsAPILoader.load().then(() => {
            const geocoder = new google.maps.Geocoder();
            const latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            const request = { latLng: latlng };
  
            geocoder.geocode(request, (results, status) => {
              if (status === google.maps.GeocoderStatus.OK) {
                console.log(results);
                let address_components = results[0].address_components;
                let address = address_components.filter(r=>{
                  if(r.types[0] == 'country'){
                    return r;
                  }
                }).map(r=>{
                  return r.short_name;
                })
                console.log(address);
                resolve(address[0]);
              }
            });
          });

        });
      }
    })
  }

}
