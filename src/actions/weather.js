import { fetchData } from './index';
import { addCity } from './city';

const DarkSkyAPISecretKey = '';

const yqlUrl = 'https://query.yahooapis.com/v1/public/yql?format=json&diagnostics=true&callback=&q=select%20*%20from%20json%20where%20url%3D%22https%3A%2F%2Fapi.darksky.net%2Fforecast%2F' + DarkSkyAPISecretKey + '%2F';

const fioIconToSkycon = (icon) => {
  return icon.toUpperCase().replace(/\-/g, '_');
};

export function setWeatherCity(weather, city) {
  return {
    type: 'SET_WEATHER_CITY',
    weather: weather,
    cityid: city.id
  };
}

export function fetchWeatherCity(city) {
  return function thunk(dispatch) {
    fetchData(yqlUrl +  city.lat + '%2C' + city.lng + '%22')
    .then((json) => {
      json = json.query.results.json;
      let weekly = json.daily.data.map((day) => {
        return { 
          lowTemp: Math.floor(day.temperatureMin),
          highTemp: Math.floor(day.temperatureMax),
          weatherType: fioIconToSkycon(day.icon)
        };
      });

      let weather = {
        temp: Math.floor(json.currently.temperature),
        lowTemp: Math.floor(json.daily.data[0].temperatureMin),
        highTemp: Math.floor(json.daily.data[0].temperatureMax),
        weatherType: fioIconToSkycon(json.currently.icon),
        tomorrowSummary: json.hourly.summary,
        weeklyForecast: weekly
      };

      dispatch(addCity(city));
      dispatch(setWeatherCity(weather, city));
    });
  };
}
