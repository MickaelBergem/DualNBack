import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

import { styles, colors } from '../style/stylesheet';

const levelStyles = {
  primary: styles.primaryButton,
  secondary: styles.secondaryButton,
  pressed: styles.pressedButton,
};

const CustomButton = ({ title, onPress, level }) => (
  <Button
    title={title}
    onPress={onPress}
    titleStyle={[styles.buttonTitle]}
    buttonStyle={[styles.button, levelStyles[level]]}
    color={colors.black}
  />
);

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  level: PropTypes.string,
};

CustomButton.defaultProps = {
  level: 'primary',
};

export default CustomButton;
