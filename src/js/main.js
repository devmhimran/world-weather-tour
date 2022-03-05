
const api_key = `e50837b613fc8767d7de30f0b334d3c4`;

const preloader = designStyle => {
    const preloaderId = document.getElementById('preloader');
    preloaderId.style.display = designStyle;
};
document.getElementById('city-input-button').addEventListener('click', function(){
    const searchTemp = ()=> {
        const cityInput = document.getElementById('city-input');
        const cityInputValue = cityInput.value;
        cityInput.value = '';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&appid=${api_key}&units=metric`;
        fetch(url)
        .then(res => res.json())
        .then(weatherData => DisplayWeatherData(weatherData));
        preloader('block');
    };
    const showWeather = (id, text) => {
        const weatherShow = document.getElementById(id);
        weatherShow.innerText = text;
        preloader('none')
    };
    searchTemp();
   const DisplayWeatherData = (weatherData) => {
       showWeather('weather-city', weatherData.name);
       showWeather('weather-temp', weatherData.main.temp);
       showWeather('weather-condition', weatherData.weather[0].main);
       const weatherIcon = document.getElementById('weather-icon');
       weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
       console.log(weatherData.weather[0]);
   }
});