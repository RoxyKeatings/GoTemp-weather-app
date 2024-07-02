import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <h1>London,Canada</h1>
      <ul>
        {" "}
        <li>Tuesday 13:52</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />
          <span className="temperature">26</span>
          <span className="unitoftemp°C">°C </span>
          <span className="tempdivider">|</span>
          <span className="unitoftemp°F">°F</span>
        </div>
        <div className="col-6 weather-details">
          <ul>
            <li>Precipitation: 0% </li>
            <li>Humidity: 41% </li>
            <li> Wind: 19 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
