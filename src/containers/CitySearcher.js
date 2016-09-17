import React from 'react';
import Geosuggest from 'react-geosuggest';

import './geosuggest.css';

class CitySearcher extends React.Component {

  render() {
    return (
      <div>
        <Geosuggest
          placeholder="City, Country"
          types={["(cities)"]}
          onSuggestSelect={this.props.onSelect}
        />
      </div>
    );
  }
}

export default CitySearcher;
