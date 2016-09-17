import mainReducer from './reducers';
import { fromJS } from 'immutable';

describe('mainReducer', () => {
  it('should return the initial state', () => {
    expect(mainReducer(undefined, {})).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action of CHANGE_LOCATION', () => {
    var location = 'New York, NY';
    expect(mainReducer(undefined, {
      type: 'CHANGE_LOCATION',
      location: location
    })).toEqual(fromJS({
      location: location,
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });
});
