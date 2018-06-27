import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Text, View } from 'react-native';
import { styles } from '../style/stylesheet';

const ScoreHistoryRow = ({ date, level, ratio }) => (
  <View style={[styles.fxHorizontal]}>
    <Text style={[styles.cell]}>
      {moment(date).fromNow()}
    </Text>
    <Text style={[styles.cell, styles.textCenter]}>
      {level.toString()}
    </Text>
    <Text style={[styles.cell, styles.textCenter]}>
      {`${ratio * 100}%`}
    </Text>
  </View>
);

ScoreHistoryRow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  level: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
};

export default ScoreHistoryRow;
