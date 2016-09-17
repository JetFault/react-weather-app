import { fetchWeatherCity } from './weather.js'

const parseOutAddress = (addressComps) => {
  var address = {}
  for (let i=0; i < addressComps.length; i++) {
    let comp = addressComps[i];

    // city
    if (comp.types[0] === "locality") {
      address.city = comp.short_name;
    }
    if (comp.types[0] === "administrative_area_level_1") {
      address.state = comp.short_name;
    }
    if (comp.types[0] === "country") {
      address.country = comp.short_name;
    }
  }
  

  return address;
};

export function addCity(city) {
  return {
    type: 'ADD_CITY',
    city
  };
}

//Both add the city and get its weather
export function addCityWeather(city) {
  return function thunk(dispatch) {
    // normalize data
    let addressComp = city.gmaps.address_components;;
    let address = parseOutAddress(addressComp);
    let parsedCity = {
      id: city.placeId,
      name: city.gmaps.formatted_address,
      ...address,
      lat: city.location.lat,
      lng: city.location.lng,
      weather: {}
    };

    dispatch(fetchWeatherCity(parsedCity));
  }
};

export function deleteCity(id) {
  return {
    type: 'DELETE_CITY',
    id: id
  };
}
