import React, { PropTypes } from 'react';
import { Card } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import Skycons from 'react-skycons';

import './weathercard.css';

const WeatherCard = ({
  location,
  weather,
  onDeleteClick
}) => {
  return (
    <Card className={"weathercard weatherBGColor-" + weather.weatherType} raised>
      <Button
        className="deleteButton"
        icon="close" floating accent mini
        onClick={onDeleteClick}
      /> 
      <h4 className="weathercard-Location" >
        {location}
      </h4>

      <div className="weathercard-Image">
        <Skycons
          height="108"
          width="108"
          color="white" 
          icon={weather.weatherType}
          autoplay={true}
        />
      </div>

      <h3 className="weathercard-Temp">
        {weather.temp + '°'}
      </h3>

      <div className="weathercard-Bottom">
        <span><span className="tempLabel">L</span> {weather.lowTemp}°</span>
        <span><span className="tempLabel">H</span> {weather.highTemp}°</span>
      </div>
    </Card>
  );
};

WeatherCard.propTypes = {
  location: PropTypes.string,
  weather: PropTypes.object,
  highTemp: PropTypes.number,
  onDeleteClick: PropTypes.func
};

export default WeatherCard;
