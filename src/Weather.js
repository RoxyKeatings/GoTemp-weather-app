import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import { Vortex } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function displayTemperature(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      feelslike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }
  function search() {
    const apiKey = "89b05tfca20b16d5f5e3c646e1oa37db";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCitySearch(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather p-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                onChange={handleCitySearch}
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
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return (
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["purple", "black", "purple", "black", "purple", "black"]}
      />
    );
  }
}
