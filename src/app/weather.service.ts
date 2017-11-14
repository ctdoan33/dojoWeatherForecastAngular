import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

	apikey="GETYOUROWN";
	constructor(private _http: Http) { }

	retrieveForecast(location, callback){
		this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${this.apikey}`).subscribe(
			(response)=>{
				callback(response.json());
			},
			(error)=>{
				callback(null);
			}
		)
	}
}
