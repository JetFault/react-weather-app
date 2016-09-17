import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import WeatherGrid from '../WeatherGrid';
import AddNewFAB from '../AddNewFAB';
import { setPageTitle } from '../../actions';

const getDateString = () => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let now = new Date();

  let day = days[now.getDay()],
    month = months[now.getMonth()],
    date = now.getDate();

  return `${day} - ${month} ${date}`;
};

export class CitiesPage extends React.Component {
  componentDidMount() {
    let title = '';
    if (this.props.cityLength > 0) {
      title = getDateString();
    }
    this.props.changeTitle(title);
  }
  componentDidUpdate = this.componentDidMount

  render() {
    return (
      <div> 
        <WeatherGrid />
        { !this.props.isEditActive &&
          <Link to="/search">
            <AddNewFAB />
          </Link>
        }
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cityLength: state.cities.length,
    isEditActive: state.isEditActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: (title) => {
      dispatch(setPageTitle(title));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPage);
