import React, { useState } from 'react';
import './forecastBox.css';
import _ from 'lodash';

const WeatherForecast = ({ forecastData }) => {
  const [count, setCount] = useState(3);
  const [displayCount, setDisplayCount] = useState(
    'scrolling-wrapper-flexbox justify-content-evenly '
  );

  const handleOnClick = () => {
    setCount(forecastData.length);
    setDisplayCount('scrolling-wrapper-flexbox');
  };

  const forecastList = _.take(forecastData, count);

  return (
    <div className="mt-4 border-top">
      <div>
        <button
          type="button"
          className="btn btn-warning col-12 mb-3 mt-4"
          onClick={handleOnClick}
        >
          See more
        </button>
      </div>
      <div className={displayCount}>
        {forecastList.map((item) => (
          <div key={item.keyIndex} className="card mx-3 px-4 theme-purple">
            <div className="d-flex justify-content-center mt-3">
              <h2 className="theme-sub-font">{item.dayInWeek}</h2>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt=""
              />
            </div>
            <div>
              <p className="white-font bold">
                Weather Status: {item.weatherStatus}
              </p>
              <p className="white-font bold">
                Weather Description: {item.weatherDescription}
              </p>
              <p className="white-font bold">
                Weather Temperature: {item.temperature} °C
              </p>
              <p className="white-font bold">
                Weather Cloudiness: {item.cloudiness}%
              </p>
              <p className="white-font bold">
                Weather Windspeed: {item.windSpeed} mph
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
