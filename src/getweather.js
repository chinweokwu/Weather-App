import displayWeather from './weatherDisplay';

const getWeatherData = (arr) => {
  const latitude = arr[0];
  const longitude = arr[1];
  const APIKEY = process.env.SECRET_KEY;
  const KELIVN = 273;
  const weather = {};
  weather.temperature = {
    unit: 'celsius',
  };
  const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
  // console.log(api);
  fetch(api)
    .then(response => {
      const data = response.json();
      return data;
    })
    .then(data => {
      weather.temperature.value = Math.floor(data.main.temp - KELIVN);
      weather.iconId = data.weather[0].icon;
      weather.description = data.weather[0].description;
      weather.city = data.name;
      weather.country = data.sys.country;
      weather.pressure = data.main.pressure;
      weather.humidity = data.main.humidity;
      weather.wind = data.wind.speed;
    })
    .then(() => {
      displayWeather(weather);
    });
};

export { getWeatherData as default };