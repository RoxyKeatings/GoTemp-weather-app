import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { Grid } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayTemperature(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icondescription: response.data.weather[0].main,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
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
                className="form-search"
                required
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn" />
            </div>
          </div>
        </form>
        <div className="WeatherInfo">
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
              <img
                src={weatherData.iconUrl}
                alt={weatherData.icondescription}
              />
              <h1 className="current-temp">
                {Math.round(weatherData.temperature)}°
              </h1>
            </div>
            <div className="col-6 weather-details">
              <ul>
                <li>Feels like:{Math.round(weatherData.feelslike)}°C</li>
                <li>Humidity: 25%</li>
                <li> Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1270a595e9f33378eae69b900458b3bd";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
    return (
      <div>
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#afa5f8"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      </div>
    );
  }
}
