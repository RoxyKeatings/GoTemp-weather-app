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
              className="form-search"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-warning" />
          </div>
        </div>
      </form>
      <h1>London</h1>
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
          26°C
        </div>
        <div className="col-6">
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
