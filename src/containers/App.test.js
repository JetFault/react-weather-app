import React from 'react';
//import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { App } from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    var tree = renderer.create(<App redux={fromJS({})}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
