import './style.css';
import weatherDisplay from './formDisplay';
import getWeather from './getweather';
import date from './timedate';

weatherDisplay();
date();

const geoLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
    const coords = [position.coords.latitude, position.coords.longitude];
    getWeather(coords);
  });
};
geoLocation();