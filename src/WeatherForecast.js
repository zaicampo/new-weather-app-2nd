import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "df0a2843c2fa36a73178f1e35e3378f6";
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
