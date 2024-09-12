import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Saturday 15:14",
    conditions: "Light rain",
    temperature: 17,
    humidity: 91,
    wind: 2.24,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div className="Weather">
      <h1 className="weather-city mb-4">{weatherData.city}</h1>
      <div className="row">
        <div className="col-6">
          <p className="weather-details">
            {weatherData.date}, {weatherData.conditions}
            <br />
            Humidity:
            <span className="humidity-value"> {weatherData.humidity}%</span>,
            Wind:
            <span className="wind-speed-value"> {weatherData.wind}km/h</span>
          </p>
        </div>
        <div className="col-3">
          <img src={weatherData.imgUrl} alt={weatherData.conditions} />
          <p className="temperature-value">
            {weatherData.temperature}
            <span className="temperature-unit">°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
