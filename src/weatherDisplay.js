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

  function celsiusToFahrenheit(temp) {
    // eslint-disable-next-line no-mixed-operators
    return (temp * 9 / 5) + 32;
  }
  tempElement.addEventListener('click', () => {
    if (weather.temperature.value === undefined) return;

    // eslint-disable-next-line eqeqeq
    if (weather.temperature.unit == 'celsius') {
      let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
      fahrenheit = Math.floor(fahrenheit);
      tempElement.innerHTML = `${fahrenheit}°<span>F<span>`;
      weather.temperature.unit = 'fahrenheit';
    } else {
      tempElement.innerHTML = `${weather.temperature.value}°<span>C<span>`;
      weather.temperature.unit = 'celsius';
    }
  });
};

export { weatherDisplay as default };
