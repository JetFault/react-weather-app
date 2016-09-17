import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'react-toolbox/lib/dialog';

import CitySearcher from '../CitySearcher';
import { addCityWeather } from '../../actions/city';

class SearchPage extends React.Component {
  handleClose = () => {
    this.context.router.push('/');
  };

  onCitySelect = (city) => {
    this.currentSelectedCity = city;
    console.log(this.currentSelectedCity);
  };

  onCityAdd = () => {
    this.props.addNewCity(this.currentSelectedCity);
    this.currentSelectedCity = null;
    this.context.router.push('/');
  };

  actions = [
    { label: 'Cancel', onClick: this.handleClose },
    { label: 'Add', onClick: this.onCityAdd,
      primary: true, raised: true, icon: 'add' }
  ];

  render() {
    return (
      <div>
        <Dialog
          className="searchCityDialog"
          actions={this.actions}
          active={this.context.router.isActive('/search')}
          onEscKeyDown={this.handleClose}
          onOverlayClick={this.handleClose}
        >
          <h1>Add New City</h1>
          <CitySearcher onSelect={this.onCitySelect}/>
        </Dialog>
      </div>
    );
  }
}
SearchPage.contextTypes = {
  router: React.PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCity: (city) => {
      dispatch(addCityWeather(city));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchPage);
