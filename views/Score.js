import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styles } from '../style/stylesheet';

const Score = ({ score }) => (
  <View style={[styles.container, styles.fxAround]}>
    <Text style={[styles.text, styles.Score__pre]}>
          Score:
    </Text>
    <Text style={[styles.text, styles.Score__value]}>
      {`${score.ratio * 100}%`}
    </Text>
    <View>
      <Text style={[styles.text]}>
      Position Hit:
        {' '}
        {score.position.hit}
      </Text>
      <Text style={[styles.text]}>
      Position Miss:
        {' '}
        {score.position.miss}
      </Text>
    </View>
  </View>
);

Score.propTypes = {
  score: PropTypes.shape({ ratio: PropTypes.number.isRequired }).isRequired,
};

export default Score;
