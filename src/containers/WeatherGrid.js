import { connect } from 'react-redux';

import CityList from '../components/CityList';
import { deleteCity } from '../actions/city';

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    isEditActive: state.isEditActive
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      dispatch(deleteCity(id));
    }
  };
};

const WeatherGrid = connect(mapStateToProps, mapDispatchToProps)(CityList);

export default WeatherGrid;
