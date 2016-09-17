import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import cities from './cities';

const pageTitle = (state = '', action) => {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.title;
    default:
      return state;
  }
};

const isEditActive = (state = false, action) => {
  switch (action.type) {
    case 'ACTIVATE_EDIT_PAGE':
      return action.isActive;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cities,
  pageTitle,
  isEditActive,
  routing
});

export default rootReducer;
