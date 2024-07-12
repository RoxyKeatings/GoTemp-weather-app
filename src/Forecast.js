import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast-container">
        <div className="row">
          <div className="col-4">
            <div className="Forecast-day">Thurs</div>
            <WeatherIcon code="01d" size={45} />
            <div className="Forecast-temp">
              <span className="Forecast-temp-max">
                {Math.round(forecast[0].temp.max)}° | {""}
              </span>
              <span className="Forecast-temp-min">
                {" "}
                {Math.round(forecast[0].temp.min)}°
              </span>
            </div>
          </div>
          <div className="col-4">
            <div className="Forecast-day">Fri</div>
            <WeatherIcon code="01d" size={45} />
            <div className="Forecast-temp">
              <span className="Forecast-temp-max">
                {Math.round(forecast[1].temp.max)}° | {""}
              </span>
              <span className="Forecast-temp-min">
                {" "}
                {Math.round(forecast[1].temp.min)}°
              </span>
            </div>
          </div>
          <div className="col-4">
            <div className="Forecast-day">Sat</div>
            <WeatherIcon code="01d" size={45} />
            <div className="Forecast-temp">
              <span className="Forecast-temp-max">
                {Math.round(forecast[2].temp.max)}° | {""}
              </span>
              <span className="Forecast-temp-min">
                {" "}
                {Math.round(forecast[2].temp.min)}°
              </span>
            </div>
          </div>
          <div className="col-4">
            <div className="Forecast-day">Sun</div>
            <WeatherIcon code="01d" size={45} />
            <div className="Forecast-temp">
              <span className="Forecast-temp-max">
                {Math.round(forecast[3].temp.max)}° | {""}
              </span>
              <span className="Forecast-temp-min">
                {" "}
                {Math.round(forecast[3].temp.min)}°
              </span>
            </div>
          </div>
          <div className="col-4">
            <div className="Forecast-day">Mon</div>
            <WeatherIcon code="01d" size={45} />
            <div className="Forecast-temp">
              <span className="Forecast-temp-max">
                {Math.round(forecast[4].temp.max)}° | {""}
              </span>
              <span className="Forecast-temp-min">
                {" "}
                {Math.round(forecast[4].temp.min)}°
              </span>
            </div>
          </div>
          <div className="col-4">
            <div className="Forecast-day">Tues</div>
            <WeatherIcon code="01d" size={45} />
            <div className="Forecast-temp">
              <span className="Forecast-temp-max">
                {Math.round(forecast[5].temp.max)}° | {""}
              </span>
              <span className="Forecast-temp-min">
                {" "}
                {Math.round(forecast[5].temp.min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1270a595e9f33378eae69b900458b3bd";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
