import React from 'react';
import { connect } from 'react-redux';

let LocationLabel = ({ location }) => {
  return (
    <h3 className="locationLabel">{location}</h3>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    location: state.location
  };
}

LocationLabel = connect(mapStateToProps)(LocationLabel);

export default LocationLabel;
