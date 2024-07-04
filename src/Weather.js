import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function displayTemperature(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      iconUrl: `https://shecodes-assets.s3.amazonaws.com/api/${response.data.condition.icon_url}.png`,
      iconDescription: response.data.icon,
      feelslike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather p-5">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-search w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-warning w-100"
              />
            </div>
          </div>
        </form>

        <h1>
          <span className="city">{weatherData.city}</span>
          {","}
          <span className="country">{weatherData.country}</span>
        </h1>
        <ul>
          {" "}
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            {weatherData.icon}
            <img src={weatherData.iconUrl} alt={weatherData.iconDescrption} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unitoftemp°C">°C </span>
            <span className="tempdivider">|</span>
            <span className="unitoftemp°F">°F</span>
          </div>
          <div className="col-6 weather-details">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelslike)}°C</li>
              <li>
                Humidity:{weatherData.humidity}
                {""}%
              </li>
              <li> Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "89b05tfca20b16d5f5e3c646e1oa37db";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemperature);
    return ` Loading weather for ${props.defaultCity}...`;
  }
}
