import displayWeather from './weatherDisplay';

const getWeatherData = (arr, str) => {
  const notify = document.querySelector('.notification');
  const APIKEY = process.env.SECRET_KEY;
  const KELIVN = 273;
  const weather = {};
  weather.temperature = {
    unit: 'celsius',
  };
  let api;
  if (str === 'coordinate') {
    const latitude = arr[0];
    const longitude = arr[1];
    api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
  } else if (str === 'city') {
    const city = arr;
    api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
  }

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
    })
    .catch((error) => {
      notify.style.display = 'block';
      notify.innerHTML = `<p>${error.message}</p>`;
    });
};

export { getWeatherData as default };