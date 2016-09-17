import React from 'react';
import { connect } from 'react-redux';
import Skycons from 'react-skycons';
import { Link } from 'react-router';

import '../citydetail.css';

import { setPageTitle } from '../../actions';

/* Bad hack.
 * Should store timestamp of date
 */
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


class CityDetailPage extends React.Component {
  componentDidMount() {
    let city = this.props.city;
    let title = '';

    if (city) {
      title = `${city.city} • ${city.state} • ${city.country}`;
    }
    this.props.changeTitle(title);

    //Weird Hack to add class to body since its outside react
  }
  componentDidUpdate = this.componentDidMount

  render() {
    let city = this.props.city;

    if (!city) {
      return (
        <div className="errorMessage">
          <h4>Can't find data for City</h4>
          <Link to="/">Return Home</Link>
        </div>
      );
    }

    return (
      <div className={'weatherBGColor-' + city.weather.weathertype}>
        <div className="forecastTopWrapper clearfix">
          <div className="todayForecast clearfix">
            <div className="todayForeLeft">
              <Skycons
                color="white"
                width={160}
                height={160}
                icon={city.weather.weatherType}
                autoplay={true}
              />
            </div>
            <div className="todayForeRight">
              <h4>Today</h4>

              <h3>{city.weather.temp}°</h3>

              <div className="tempHiLow">
                <span><span className="tempLabel">L</span> {city.weather.lowTemp}°</span>
                <span><span className="tempLabel">H</span> {city.weather.highTemp}°</span>
              </div>

              <div className="todaySummary">
                <h5>Next Hour</h5>
                <p>{city.weather.tomorrowSummary}</p>
              </div>
            </div>

          </div>
          <div className="sixDayForecast">
            <ul className="forecastlist">
              { city.weather.weeklyForecast.map((cast, idx) => {
                return (
                  <li key={idx}>
                    <h4>{DAYS[addDays(new Date(), idx + 1).getDay()]}</h4>
                    <div className="weatherIcon">
                      <Skycons
                        color="white"
                        width={90}
                        height={90}
                        icon={cast.weatherType}
                        autoplay={false}
                      />
                    </div>
                    <div className="tempHiLow">
                      <span><span className="tempLabel">L</span> {cast.lowTemp}°</span>
                      <span><span className="tempLabel">H</span> {cast.highTemp}°</span>
                    </div>
                  
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    city: state.cities.find(x => x.id === ownProps.params.city)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: (title) => {
      dispatch(setPageTitle(title));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CityDetailPage);
