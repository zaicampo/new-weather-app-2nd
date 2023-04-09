import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Mon</div>
          <img
            src=" https://openweathermap.org/img/wn/10d@2x.png"
            alt="cloudy brokens"
            sizes={20}
          />
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">19º</span>
            <span className="Forecast-temp-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
