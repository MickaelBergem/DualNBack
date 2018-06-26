import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ControlButton = ({ title, onPress, pressed }) => (
  <Button
    onPress={onPress}
    title={title}
    level={pressed ? 'pressed' : 'primary'}
  />
);

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  pressed: PropTypes.bool,
};

ControlButton.defaultProps = {
  pressed: false,
};

export default ControlButton;
