import getWeather from './getweather';

const geoLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
    const coords = [position.coords.latitude, position.coords.longitude];
    getWeather(...coords);
  });
};

export { geoLocation as default };