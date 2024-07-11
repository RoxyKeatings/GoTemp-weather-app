import React from "react";
import FormattedDate from "./FormattedDate";

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
          <img src={props.data.iconUrl} alt={props.data.icondescription} />
          <h1 className="current-temp">
            {Math.round(props.data.temperature)}°
          </h1>
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
