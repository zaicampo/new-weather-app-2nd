import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        sizes={20}
      />
      <div className="Forecast-temp">
        <span className="Forecast-temp-max">{maxTemperature()}C</span>
        <span className="Forecast-temp-min">{minTemperature()}C</span>
      </div>
    </div>
  );
}
