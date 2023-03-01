import React from 'react';

const TodayWeather = ({ data }) => {
  return (
    <div className="col-sm-5">
      <h1 className="theme-sub-font bold">Todays' weather in {data.city}</h1>
      <p>Weather Status: {data.weatherStatus}</p>
      <p>Weather Description: {data.weatherDescription}</p>
      <p>Temperature: {data.temperature}C</p>
      <p>Couldiness: {data.cloudiness}%</p>
      <p>Wind Speed: {data.windSpeed}mph</p>
      <p>Sun Rise: {data.sunRise}</p>
      <p>Sun Set: {data.sunSet}</p>
    </div>
  );
};

export default TodayWeather;
