import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/App.css';

import WeatherNavBar from '../components/navbar/WeatherNavBar';

export class App extends Component {

  render() {
    return (
      <div>
        <WeatherNavBar />
        { this.props.children }
      </div>
    );
  }
}

export default connect()(App);
