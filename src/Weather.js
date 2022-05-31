import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Tuesday 05:55</li>
        <li>Overcast Clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Overcast Clauds"
          />{" "}
          33°C
        </div>
        <div className="col-6">
          <li>Precipitation: 0%</li>
          <li>Humidity: 38%</li>
          <li>Wind: 10 km/h</li>
        </div>
      </div>
    </div>
  );
}
