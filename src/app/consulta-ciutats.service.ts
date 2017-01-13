import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { City } from './city';

@Injectable()
export class ConsultaCiutatsService {

  private headers = new Headers({'Origin': '*', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"});

  private citiesUrl = 'http://worldweather.wmo.int/en/json/full_city_list.txt';

  //private citiesUrl = 'full_city_list.txt';

  private city = 'http://worldweather.wmo.int/en/json/234_en.xml';

  //private city = '1232_en.xml';

  cities: string;

  cityInfo: string;

  constructor(private http: Http) { }

  getCities() {
    this.http.get(this.citiesUrl)
    .subscribe(
        data => this.cities = data.text(),
        err => this.handleError,
        () => {console.log('getCities() Complete'); console.log('cities:' + this.cities);}
    );

    /*this.http.get(this.citiesUrl, {headers: this.headers})
        .subscribe(cities => this.cities = cities.text());

    console.log(this.cities);*/
    
    /*this.http.get(this.citiesUrl, {headers: this.headers})
        .map((res:Response) => res.text())
        .subscribe(
            data => this.cities = data,
            err => this.handleError,
            () => {console.log('Random Quote Complete'); console.log('cities:' + this.cities);}
        );*/
  }

  getClimate() {
    this.http.get(this.city)
        .subscribe(
            data => this.cityInfo = data.text(),
            err => this.handleError,
            () => {console.log('getClimate() Complete'); console.log('cityInfo:' + this.cityInfo);}
        );
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  getCitiesHttpRequest() {
    //do some vanilla XHR
    var xhr = new XMLHttpRequest();
    console.log("c");
    xhr.open('GET', this.citiesUrl, true);
    console.log("b");
    xhr.onload = function () {
        console.log("a");
        if (this.status === 200) {
            var blob = new Blob([xhr.response], {type: "text/plain"});
            console.log("got result: ", xhr.response);
        }
    };
    console.log("d");
    xhr.send();
    console.log("e");

    //or if we are using jQuery...
    /*$.get('http://xyz.example.com/secret/file.txt').done(function(data) {
        console.log("got result: ", data);
    });*/
  }

    invocation = new XMLHttpRequest();
    url = 'http://worldweather.wmo.int/en/json/full_city_list.txt';
    invocationHistoryText;

    callOtherDomain(){
        if(this.invocation) {
            console.log(this.invocation);
            this.invocation.open('GET', this.url, true);
            this.invocation.onreadystatechange = function () {
                console.log(this);
                if (this.readyState == 4) {
                        if (this.status == 200) {
                            var response = this.responseXML;
                            console.log(response);
                        }   
                        else {
                            alert("Invocation Errors Occured");
                        }
                }
                else {
                    console.log("currently the application is at" + this.readyState);
                }
            }
            this.invocation.send(); 
        } else {
            this.invocationHistoryText = "No Invocation TookPlace At All";
            //var textNode = document.createTextNode(this.invocationHistoryText);
            //var textDiv = document.getElementById("textDiv");
            //textDiv.appendChild(textNode);
            console.log(this.invocationHistoryText);
        }
        
    }
    handler(evtXHR)
    {
        console.log(this.invocation);
        if (this.invocation.readyState == 4)
        {
                if (this.invocation.status == 200)
                {
                    var response = this.invocation.responseXML;
                    console.log(response);
                    
                }
                else
                    alert("Invocation Errors Occured");
        }
        else
            console.log("currently the application is at" + this.invocation.readyState);
    }
}
