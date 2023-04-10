import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature" id="temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="unitTemperature"> °C </span>
    </div>
  );
}
