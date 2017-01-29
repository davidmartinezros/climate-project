import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class ConsultaCiutatsService {

  private municipisUrl = 'assets/municipis.json';

  municipis: any;

  constructor(private http: Http) { }

  loadMunicipis() {

      this.http.get(this.municipisUrl)
      .subscribe(
          data => this.municipis = data.json(),
          err => this.handleError,
      () => {console.log('getMunicipis Complete');/*console.log(this.municipis);*/}
      );
  }

  getMunicipi(municipi: string): string {

      var tittles = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
      var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";

      for (var i = 0; i < tittles.length; i++) {
            municipi = municipi.replace(new RegExp(tittles.charAt(i), 'g'), original.charAt(i)).toLowerCase();
      }
      for(let object of this.municipis) {
        let nomJson = object.NOMBRE;
        for (var i = 0; i < tittles.length; i++) {
            nomJson = nomJson.replace(new RegExp(tittles.charAt(i), 'g'), original.charAt(i)).toLowerCase();
        }
        if(nomJson.includes(municipi)) {
            //console.log('find' + nomJson);
            //console.log('info:' + object.CODAUTO + object.CPRO + object.CMUN + object.DC);
            let municipi = nomJson.replace(/ /g,'-').replace(/\'/g,'').replace(/,/g,'').replace(/\//g,'-');
            //console.log(municipi);
            return municipi + "-id" + object.CPRO + object.CMUN;
        }
      }
      return "NO_TROBAT";
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  loadLocation(latlon) {
      let googleKey = "AIzaSyAzNjuCmvqM0MsWyTHT9uk_d3xob0_Iq6M";
      let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlon + "&key=" + googleKey;

      return this.http.get(url).map( data => data.json() );
  }

}
