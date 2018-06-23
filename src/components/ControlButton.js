import React from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';

import { styles, colors } from '../style/stylesheet';

const ControlButton = ({ title, onPress, pressed }) => (
  <View style={styles.controlButton}>
    <Button
      onPress={onPress}
      title={title}
      color={pressed ? colors.controlButtonPressed : colors.controlButton}
      style={styles.controlButton__btn}
    />
  </View>
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
