import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { Grid } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.weather[0].icon,
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function search() {
    const apiKey = "1270a595e9f33378eae69b900458b3bd";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather p-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                onChange={handleChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <Grid
        visible={true}
        height="150"
        width="150"
        color="black"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    );
  }
}
