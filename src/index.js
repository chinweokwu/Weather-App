import './style.css';
import weatherDisplay from './formDisplay';
import getWeather from './getweather';
import date from './timedate';


weatherDisplay();
date();
const form = document.querySelector('form');
const input = document.querySelector('input');

const geoLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
    const coords = [position.coords.latitude, position.coords.longitude];
    getWeather(coords, 'coordinate');
  });
};
geoLocation();

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputVal = input.value;
  getWeather(inputVal, 'city');
  input.value = '';
});