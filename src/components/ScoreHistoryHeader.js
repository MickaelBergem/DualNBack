import React from 'react';

import { Text, View } from 'react-native';
import { styles } from '../style/stylesheet';

const ScoreHistoryHeader = () => (
  <View style={[styles.fxHorizontal, styles.tableHeader]}>
    <Text style={[styles.cellHead]}>
      Date
    </Text>
    <Text style={[styles.cellHead, styles.textCenter]}>
      N
    </Text>
    <Text style={[styles.cellHead, styles.textCenter]}>
      Accuracy
    </Text>
  </View>
);

export default ScoreHistoryHeader;
