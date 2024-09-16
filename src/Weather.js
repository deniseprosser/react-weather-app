import React, { useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Saturday 15:14",
      conditions: response.data.condition.description,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
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
            <img src={weatherData.iconUrl} alt={weatherData.conditions} />
          </div>
          <div className="col-5">
            <p className="temperature-value">
              {Math.round(weatherData.temperature)}
              <span className="temperature-unit">°C</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "aab3d3obc0205ebt561454f09dff85ec";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }
}
