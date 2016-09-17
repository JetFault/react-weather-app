import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Button, IconButton } from 'react-toolbox';
import { Link } from 'react-router';

import './WeatherNavBar.css';
import menuIcon from '../../static/menu.svg';

import { toggleNavDrawer } from '../../actions';

let WeatherNavBar = ({ mainTitle, citiesLength }) => (
  <AppBar className="weathernavbar" fixed flat>
    <IconButton inverse onClick={ toggleNavDrawer } >
      <img src={menuIcon} alt="menu-icon"/>
    </IconButton>
    <h3 className="pageTitle">{ mainTitle }</h3>
    { citiesLength > 0 &&
      <div>
        <div>
          <Link to="/edit" onlyActiveOnIndex={true} activeStyle={{display: 'none'}}>
            <Button className="editButton" label="Edit" inverse ripple/>
          </Link>
          <Link to="/" onlyActiveOnIndex={true} activeStyle={{display: 'none'}}>
            <Button className="editButton" label="Save" inverse ripple/>
          </Link>
        </div>
      </div>
    }
  </AppBar>
);

const mapStateToProps = (state, ownProps) => {
  return {
    mainTitle: state.pageTitle,
    citiesLength: state.cities.length
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavDrawer: () => {
      dispatch(toggleNavDrawer)
    }
  };
};

WeatherNavBar = connect(mapStateToProps, mapDispatchToProps)(WeatherNavBar);

export default WeatherNavBar;
