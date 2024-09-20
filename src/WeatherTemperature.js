import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p className="temperature-value">
          {Math.round(props.celsius)}{" "}
          <span className="temperature-unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <p className="temperature-value">
          {Math.round(fahrenheit())}{" "}
          <span className="temperature-unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </p>
      </div>
    );
  }
}
