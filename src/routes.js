import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import CitiesPage from './containers/pages/CitiesPage';
import SearchPage from './containers/pages/SearchPage';
import EditPage from './containers/pages/EditPage';
import CityDetailPage from './containers/pages/CityDetailPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CitiesPage} />
    <Route component={CitiesPage} >
      <Route path="/search" component={SearchPage} />
      <Route path="/edit" component={EditPage}/>
    </Route>
    <Route path="/city/:city" component={CityDetailPage} />
  </Route>
)
