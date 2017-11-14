import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DcComponent implements OnInit {

	humidity;
	avgtemp;
	hightemp;
	lowtemp;
	status;

	constructor(private _weatherService: WeatherService) {
		this._weatherService.retrieveForecast("Washington, D.C.", (forecast)=>{
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
