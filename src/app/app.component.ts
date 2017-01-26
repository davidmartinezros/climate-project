import { Component, OnInit } from '@angular/core';

import { ConsultaCiutatsService } from './consulta-ciutats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  titol = '¡El Tiempo del Viajero en España!';
  descripcio = 'Encuentra las prediciones meteorológicas de todos los municipios españoles durante los próximos cuatro días';
  //title = 'The Traveler Weather!';

  textMunicipi = "";

  //idioma: string = "ca";
  idioma: string = "es";

  municipi: string = "barcelona-id08019";
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

  constructor(private consultaCiutatsService: ConsultaCiutatsService) { }

  ngOnInit(): void {
    
    this.consultaCiutatsService.loadMunicipis();
    this.reloadUrl();
  }

  buscarMunicipi(event, value) {

    console.log("busquem:" + value);
    this.municipi = this.consultaCiutatsService.getMunicipi(value);
    this.reloadUrl();
  }
  
}
