import React, { PropTypes} from 'react';
import Button from 'react-toolbox/lib/button';
import { Link } from 'react-router';

import snowmanImg from '../static/empty-state-snowman.svg';
import './citygrid.css';

import WeatherCard from './card/WeatherCard';

const CityList = ({ cities, onCityClick, onDeleteClick, isEditActive }) => (
  <div className={isEditActive ? 'editActive': ''}>
    {cities.length < 1 && 
      <div className="noCities">
        <div>
          <img src={snowmanImg} alt="snowman"/>
          <p>Wanna know if you'll melt outside?</p>
          <p>Start getting some weather.</p>
        </div>
      </div>
    }
    <div className="cityList">
      {cities.map(city => {
        let locString = `${city.city} • ${city.state} • ${city.country}`;
        //let { temp, lowTemp, highTemp } = weather
        return (
          <Link to={'/city/' + city.id} style={{'textDecoration': 'none', color: '#fff'}}>
            <WeatherCard
              key={city.id}
              location={locString}
              {...city}
              onDeleteClick={() => onDeleteClick(city.id)}
            />
          </Link>
        );
      })}
      {cities.length > 0 &&
        <Link to="/search" style={{'textDecoration': 'none'}}>
          <div className="weathercard weathercard-Placeholder">
            <Button className="disabledButton" icon="add" floating disabled/>
            <p>Get some weather</p>
          </div>
        </Link>
      }
    </div>
  </div>
);

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  isEditActive: PropTypes.bool
};

export default CityList;
