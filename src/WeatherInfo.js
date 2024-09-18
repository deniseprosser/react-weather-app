import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="weather-city mt-4 mb-4">{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <p className="weather-details">
            <FormattedDate date={props.data.date} />, {props.data.conditions}
            <br />
            Humidity:
            <span className="humidity-value"> {props.data.humidity}%</span>,
            Wind:
            <span className="wind-speed-value"> {props.data.wind}km/h</span>
          </p>
        </div>
        <div className="col-1">
          <img src={props.data.iconUrl} alt={props.data.conditions} />
        </div>
        <div className="col-5">
          <p className="temperature-value">
            {Math.round(props.data.temperature)}
            <span className="temperature-unit">°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
