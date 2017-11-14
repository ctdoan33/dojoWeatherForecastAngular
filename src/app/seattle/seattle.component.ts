import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeattleComponent implements OnInit {

	humidity;
	avgtemp;
	hightemp;
	lowtemp;
	status;

	constructor(private _weatherService: WeatherService) {
		this._weatherService.retrieveForecast("Seattle, WA", (forecast)=>{
			this.humidity=forecast.main.humidity;
			this.avgtemp=Math.round((forecast.main.temp-273.15)*9/5+32);
			this.hightemp=Math.round((forecast.main.temp_max-273.15)*9/5+32);
			this.lowtemp=Math.round((forecast.main.temp_min-273.15)*9/5+32);
			this.status=forecast.weather;
		})
	}

  ngOnInit() {
  }

}
