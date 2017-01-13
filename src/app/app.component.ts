import { Component, OnInit } from '@angular/core';

//import { ConsultaCiutatsService } from './consulta-ciutats.service';

//import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Predicció meteorològica!';

  municipi: string = "barcelona-id08019";
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

  diesDePrevisio: string = "4";

  colorCapcalera1: string = "4f86d9";
  colorCapcalera2: string = "95b6e9";

  tamanyLletraImatges: string = "8";

  urlTempsMunicipi: string = "http://www.aemet.es/ca/eltiempo/prediccion/municipios/mostrarwidget/" + 
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

  //cities: City[];

  constructor(/*private consultaCiutatsService: ConsultaCiutatsService*/) { }

  ngOnInit(): void {
    //console.log('aaa');

    //this.consultaCiutatsService.callOtherDomain();
    
    //this.consultaCiutatsService.getCities();

    //this.consultaCiutatsService.getClimate();

    //this.consultaCiutatsService.getCitiesHttpRequest();

    //this.consultaCiutatsService.getCitiesByName('Barcelona').then(cities => this.cities = cities);
    //console.log('cities:' + this.cities[0].city);
  }
  
}
