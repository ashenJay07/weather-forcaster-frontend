import React, { useState } from 'react';
import Carousel from './carousel';
import Footer from './footer';
import SearchBox from './searchBox';
import TodayWeather from './todayWeather';
import WeatherForecast from './weatherForecast';
import axios from 'axios';
import Converter from 'timestamp-conv';
import _ from 'lodash';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const navigate = useNavigate();
  const [renderStatus, setRenderStatus] = useState(true);
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [geoLocation, setGeoLocation] = useState({
    latitude: 6.927079,
    longitude: 79.861244,
  });

  // prettier-ignore
  const API_URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  const API_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  const searchGeoLocation = async () => {
    await axios.get(API_URL_WEATHER).then((res) => {
      setData({
        city: res.data.name,
        weatherStatus: res.data.weather[0].main,
        weatherDescription: res.data.weather[0].description,
        temperature: (res.data.main.temp - 273.15).toFixed(1),
        cloudiness: res.data.clouds.all,
        windSpeed: (res.data.wind.speed * 2.237).toFixed(1),
        sunRise: new Date(res.data.sys.sunrise * 1000).toLocaleTimeString(),
        sunSet: new Date(res.data.sys.sunset * 1000).toLocaleTimeString(),
      });
    });
  };

  const getForecastData = async () => {
    await axios.get(API_URL_FORECAST).then((res) => {
      var todayDate;
      var forecastArr = [];
      var forecastIndex = 0;

      for (let i = 0; i < 40; i++) {
        const arrDate = timeStampConvertor(res.data.list[i].dt);
        if (todayDate !== arrDate) {
          const tempForecastData = {
            keyIndex: todayDate,
            weatherStatus: res.data.list[i].weather[0].main,
            weatherDescription: res.data.list[i].weather[0].description,
            temperature: (res.data.list[i].main.temp - 273.15).toFixed(1),
            cloudiness: res.data.list[i].clouds.all,
            windSpeed: (res.data.list[i].wind.speed * 2.237).toFixed(1),
            icon: res.data.list[i].weather[0].icon,
            dayInWeek: getDayOfWeek(res.data.list[i].dt),
          };

          forecastArr[forecastIndex] = tempForecastData;
          forecastIndex++;

          todayDate = arrDate;
        }
      }
      setForecastData(_.drop(forecastArr));
    });
  };

  const timeStampConvertor = (unixValue) => {
    const derivedDate = new Converter.date(unixValue);
    return parseInt(derivedDate.getDay());
  };

  const getDayOfWeek = (unixValue) => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const derivedDate = new Converter.date(unixValue);
    const date = new Date(derivedDate.timestamp);
    return weekday[date.getDay()];
  };

  // render controller
  if (renderStatus === true) {
    searchGeoLocation();
    getForecastData();
    setRenderStatus(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Cookies.get('auth')) {
      searchGeoLocation();
      getForecastData();
    } else {
      navigate('/login');
    }
  };

  const handleChange = (e) => {
    const tempGeoLocation = { ...geoLocation };
    tempGeoLocation[e.currentTarget.name] = e.currentTarget.value;
    setGeoLocation(tempGeoLocation);
  };

  return (
    <React.Fragment>
      <Carousel />
      <main className="container">
        <div className="row pt-4 d-flex justify-content-evenly">
          <TodayWeather data={data} />
          <SearchBox onSubmit={handleSubmit} onChange={handleChange} />
        </div>
        <div>
          <WeatherForecast forecastData={forecastData} />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default HomeComponent;
