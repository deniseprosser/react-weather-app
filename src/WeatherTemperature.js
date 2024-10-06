import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <p className="temperature-value">
        {Math.round(props.celsius)} <span className="temperature-unit">°C</span>
      </p>
    </div>
  );
}
