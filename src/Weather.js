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

  let apiKey = "";
  let apiUrl = ``;

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city"
              className="search-bar"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="search-button" />
          </div>
        </div>
      </form>
      <h1 className="weather-city mt-4 mb-4">{weatherData.city}</h1>
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
        <div className="col-1">
          <img src={weatherData.imgUrl} alt={weatherData.conditions} />
        </div>
        <div className="col-5">
          <p className="temperature-value">
            {weatherData.temperature}
            <span className="temperature-unit">°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
