import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let city = props.city;
  const apiKey = "89b05tfca20b16d5f5e3c646e1oa37db";
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast m-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Thurs</div>
            <div>Icon </div>
            <div className="Forecast-Temperatures">
              <span className="Forecast-temp-max">19°</span>
              {"|"}
              <span className="Forecast-temp-min">10°</span>
            </div>
          </div>
          <div className="col">
            <div className="Forecast-day">Thurs</div>
            <div>Icon </div>
            <div className="Forecast-Temperatures">
              <span className="Forecast-temp-max">19°</span>
              {"|"}
              <span className="Forecast-temp-min">10°</span>
            </div>
          </div>
          <div className="col">
            <div className="Forecast-day">Thurs</div>
            <div>Icon </div>
            <div className="Forecast-Temperatures">
              <span className="Forecast-temp-max">19°</span>
              {"|"}
              <span className="Forecast-temp-min">10°</span>
            </div>
          </div>
          <div className="col">
            <div className="Forecast-day">Thurs</div>
            <div>Icon </div>
            <div className="Forecast-Temperatures">
              <span className="Forecast-temp-max">19°</span>
              {"|"}
              <span className="Forecast-temp-min">10°</span>
            </div>
          </div>
          <div className="col">
            <div className="Forecast-day">Thurs</div>
            <div>Icon </div>
            <div className="Forecast-Temperatures">
              <span className="Forecast-temp-max">19°</span>
              {"|"}
              <span className="Forecast-temp-min">10°</span>
            </div>
          </div>
          <div className="col">
            <div className="Forecast-day">Thurs</div>
            <div>Icon </div>
            <div className="Forecast-Temperatures">
              <span className="Forecast-temp-max">19°</span>
              {"|"}
              <span className="Forecast-temp-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
