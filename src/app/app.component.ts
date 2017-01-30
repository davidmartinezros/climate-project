import { Component, OnInit } from '@angular/core';

import { ConsultaCiutatsService } from './consulta-ciutats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  idioma: string = "ca";
  dictionary: any;

  titol = "";
  descripcio = "";

  locationInformation: any;

  location: any;

  municipi: string = "";
  //municipi: string = "barcelona-id08019";
  //municipi: string = "cadiz-id11012";
  //municipi: string = "girona-id17079";

  colorDeFons: string = "ffffff";
  amplada: string = "375";
  alcada: string = "300";

  mostrarVariables: string = "0";
  mostrarEstatDelCel: string = "1";
  mostrarProbPrecip: string = "1";
  mostrarTempMinMax: string = "1";
  mostrarSenTermMinMax: string = "1";
  mostrarHumRelMinMax: string = "1";
  mostrarVent: string = "1";
  mostrarBorder: string = "1";

  diesDePrevisio: string = "7";

  colorCapcalera1: string = "4f86d9";
  colorCapcalera2: string = "95b6e9";

  tamanyLletraImatges: string = "8";
  
  urlTempsMunicipi: string = "";

  //googleUrl: string = "";

  loadDictionary() {
      this.dictionary = {
        titol: {ca: 'El Temps a Espanya!', es: '¡El Tiempo en España!', en: 'The Weather in Spain!', fr: 'String1InSpanish', gl: 'O tempo en España!', va: 'El Temps a Espanya!', eu: 'Eguraldia Espainian!'},
        descripcio: {
          ca: 'Troba les prediccions meteorològiques de tots els municipis espanyols durant els propers quatre dies.',
          es: 'Encuentra las prediciones meteorológicas de todos los municipios españoles durante los próximos cuatro días.',
          en: 'Find weather forecasts for all Spanish municipalities over the next four days.', 
          fr: 'Trouvez les prévisions météo pour toutes les municipalités espagnoles au cours des quatre prochains jours.',
          gl: 'Atopar as previsións do tempo para todos os municipios españois durante os próximos catro días.',
          va: 'Troba les prediccions meteorològiques de tots els municipis espanyols durant els propers quatre dies.',
          eu: 'Aurki eguraldi Espainiako udalerri guztietako iragarpenak hurrengo lau egunetan zehar.'}
      };
  }

  getTranslation(inStringId: string, inLanguageId: string) {
      let labelTexts = this.dictionary[inStringId];
      let translation;
      if (labelTexts) {
          translation = labelTexts[inLanguageId];
      }
      if (translation == null) {
          translation = inStringId;
          console.error(inStringId + ' has no defined text for language ' + inLanguageId); 
      }
      return translation;
  }

  loadTexts() {
    this.titol = this.getTranslation("titol", this.idioma);
    this.descripcio = this.getTranslation("descripcio", this.idioma);
  }


  reloadUrl() {
    
    this.urlTempsMunicipi = "http://www.aemet.es/"+
      this.idioma + 
      "/eltiempo/prediccion/municipios/mostrarwidget/" + 
      this.municipi + "?w=g" + this.diesDePrevisio + "p" +
        this.mostrarVariables +
        this.mostrarEstatDelCel +
        this.mostrarProbPrecip +
        this.mostrarTempMinMax +
        this.mostrarSenTermMinMax +
        this.mostrarHumRelMinMax +
        this.mostrarVent +
        this.mostrarBorder +
        "ohm" + this.colorDeFons + "w" + this.amplada + "z" + this.alcada + "x" + this.colorCapcalera1 + "t" + this.colorCapcalera2 + "r1s" + this.tamanyLletraImatges + "n2"; 
  }

  //cities: City[];

  constructor(private consultaCiutatsService: ConsultaCiutatsService) {
    
    this.loadLanguage();

    this.loadLocation();

    this.loadDictionary();

    this.loadTexts();

    this.consultaCiutatsService.loadMunicipis();
  }

  ngOnInit(): void {
    
    //console.log(navigator.geolocation);
    //this.municipi = navigator.geolocation.getCurrentPosition.name;
    
    
  }

  buscarMunicipi(event, value) {

    //console.log("busquem:" + value);
    this.municipi = this.consultaCiutatsService.getMunicipi(value);
    this.reloadUrl();
  }

  loadLanguage() {
    let idioma = navigator.language;
    if(idioma === 'ca' || idioma == 'es' || idioma == 'gl' || idioma == 'va' || idioma == 'eu' || idioma == 'en' || idioma == 'fr') {
      this.idioma = idioma;
    } else {
      this.idioma = "en";
    }
  }

  loadLocation() {
    //console.log("showPosition");

    //console.log(position);

    //console.log(latlon);

    //this.googleUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";

    //console.log(this.googleUrl);

    this.consultaCiutatsService.getLocation()
    .subscribe (
      data => this.location = data,
      err => this.handleError,
      () => {
        var latlon = this.location.location.lat + "," + this.location.location.lng;
        this.consultaCiutatsService.loadLocation(latlon)
          .subscribe(
            data => this.locationInformation = data,
            err => this.handleError,
            () => {
              console.log('loadLocation Complete');
              let value = this.getLocation();
              this.municipi = this.consultaCiutatsService.getMunicipi(value);
              this.reloadUrl();
            }
          )
        }
      );
    }

  failureShowPosition(failure) {
    console.log(failure);
    this.municipi = "barcelona-id08019";
  }

  getLocation() {
      for(let object of this.locationInformation.results) {
          for(let address of object.address_components) {
              if (address.types[0] == "administrative_area_level_2") {
                  return address.long_name;
              }
          }
      }
      return null;
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
  
}
