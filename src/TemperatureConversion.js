import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function converttoFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function converttoCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="TemperatureConversion">
        <span className="current-temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={converttoFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TemperatureConversion">
        <span className="current-temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={converttoCelsius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
