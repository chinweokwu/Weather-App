const weatherDisplay = (weather) => {
  const locationElement = document.querySelector('.location');
  const iconElement = document.querySelector('.weather-icon');
  const tempElement = document.querySelector('.weather-temp');
  const descElement = document.querySelector('.weather-desc');
  const humidtyElement = document.querySelector('.humidity-value');
  const pressureElement = document.querySelector('.pressure-value');
  const windElement = document.querySelector('.wind-value');

  iconElement.innerHTML = `<img src="../icons/${weather.iconId}.png">`;
  tempElement.innerHTML = `${weather.temperature.value}°<span>C<span>`;
  descElement.innerHTML = weather.description;
  humidtyElement.innerHTML = `${weather.humidity} %`;
  pressureElement.innerHTML = `${weather.pressure} mb`;
  windElement.innerHTML = `${weather.wind} km/h`;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
};

export { weatherDisplay as default };
