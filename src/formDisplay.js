const formDisplay = () => {
  const container = document.querySelector('.container');

  container.innerHTML = `
  <div class="weather-side">
  <div class="weather-gradient">
    <div class="date-container">
    
      <h2 class="date-dayname"> Tuesday</h2>
      
      <span class="date-day">15 Jan 2019</span>
      
      <i class="location-icon">
        <span class="location">----, XX</span>
      </i>

    </div>
    <div class="weather-container">

    
    <div class="weather-icon">
    <img src="../icons/unknown.png">
    </div>
   
   
      <h1 class="weather-temp">X°<span>C<span></h1>
       
      <h3 class="weather-desc">-----</h3>
    </div>
  </div>
</div>
<div class="info-side">
  <div class="today-info-container">
    <div class="today-info-container">
      <div class="today-info">
      
        <div class="precipitation">
          <span class="title">PRESSURE: </span>
          <span class="value pressure-value">34 mb</span>
          <div class="clear"></div>
        </div>
        
        <div class="humidity">
          <span class="title">HUMIDITY</span>
          <span class="value humidity-value">34 %</span>
          <div class="clear"></div>
        </div>
        
        <div class="wind">
          <span class="title">WIND</span>
          <span class="value wind-value">0 km/h</span>
          <div class="clear"></div>
        </div>

      </div>
    </div>
  </div>
  <div class="location-container">
    <button class="location-button">
      <span>change location</span>
    </button>
  </div>
</div>`;
};

export { formDisplay as default };