import React, { PropTypes } from 'react';

import Button from 'react-toolbox/lib/button';

import './components.css';

const FloatingActionButton = ({ iconNormal, iconActive, onClick, active }) => (
  <Button
    className="FAB"
    accent
    floating
    onClick={ () => onClick() }
    icon={ active ? iconActive : iconNormal } 
  ></Button>
)

FloatingActionButton.propTypes = {
  iconNormal: PropTypes.string,
  iconActive: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
};

export default FloatingActionButton;
