import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unitoftemp°C">°C </span>
        <span className="tempdivider">|</span>
        <span className="unitoftemp°F">
          <a href="\" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unitoftemp°C">
          <a href="\" onClick={convertCelcius}>
            °C
          </a>{" "}
        </span>
        <span className="tempdivider">|</span>
        <span className="unitoftemp°F">°F</span>
      </div>
    );
  }
}
