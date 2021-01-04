const formDisplay = () => {
  const container = document.querySelector('.container');

  container.innerHTML = `
  <div class="weather-side">
  <div class="weather-gradient">
    <div class="date-container">
      <h2 class="date-dayname"> Tuesday</h2>
      <span class="date-day">15 Jan 2019</span>
      <i class="location-icon" data-feather="map-pin">
        <span class="location">paris, FR</span>
      </i>
    </div>
    <div class="weather-container">
      <i class="weather-icon" data-feather="sun"></i>
      <h1 class="weather-temp">29°C</h1>
      <h3 class="weather-desc">Sunny</h3>
    </div>
  </div>
</div>
<div class="info-side">
  <div class="today-info-container">
    <div class="today-info-container">
      <div class="today-info">
        <div class="precipitation">
          <span class="title">PRECIPITATION: </span>
          <span class="value">34 %</span>
          <div class="clear"></div>
        </div>
        <div class="humidity">
          <span class="title">HUMIDITY</span>
          <span class="value">34 %</span>
          <div class="clear"></div>
        </div>
        <div class="wind">
          <span class="title">WIND</span>
          <span class="value">0 km/h</span>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="location-container">
    <button class="location-button">
      <i data-feather="map-pin"></i>
      <span>change location</span>
    </button>
  </div>
</div>`;
};

export { formDisplay as default };