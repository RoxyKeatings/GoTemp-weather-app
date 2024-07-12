import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <span className="city">{props.data.city}</span>
        {","}
        <span className="country">{props.data.country}</span>
      </h1>
      <ul>
        {" "}
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={45} />
          </div>
          <TemperatureConversion celsius={props.data.temperature} />
        </div>
        <div className="col-6 weather-details">
          <ul>
            <li>Feels like:{Math.round(props.data.feelslike)}°C</li>
            <li>Humidity: 25%</li>
            <li> Wind: {Math.ceil(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
