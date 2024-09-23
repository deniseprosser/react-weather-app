import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div
          className="col
        "
        >
          <div className="day">Tue</div>
          <div>Icon</div>
          <span className="max-temperature">19°</span>{" "}
          <span className="min-temperature">10°</span>
        </div>
      </div>
    </div>
  );
}
