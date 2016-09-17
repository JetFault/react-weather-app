const city = (state, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return action.city
      //let addressComp = action.city.gmaps.address_components;;
      //let address = parseOutAddress(addressComp);
      //return {
        //id: action.city.placeId,
        //name: action.city.gmaps.formatted_address,
        //...address,
        //lat: action.city.location.lat,
        //lng: action.city.location.lng
      //};

    case 'SET_WEATHER_CITY':
      if (state.id !== action.cityid) {
        return state;
      }

      return {
        ...state,
        weather: action.weather
      };
    default:
      return state;
  }
};


const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        city(undefined, action)
      ];
    case 'DELETE_CITY':
      let idx = state.findIndex((x) => x.id === action.id);
      if (idx > -1) {
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ];
      }
      return state;
    case 'SET_WEATHER_CITY':
      return state.map(c => city(c, action));
    default:
      return state;
  }
};

export default cities;
