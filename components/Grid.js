import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { styles, colors } from '../style/stylesheet';

const GRID_SIZE = 3;

const Grid = ({ litTile }) => (
  <View style={styles.gridContainer}>
    {[...Array(GRID_SIZE)].map((x, i) => (
      <View style={styles.fxHorizontal} key={i}>
        {[...Array(GRID_SIZE)].map((y, j) => (
          <View key={j} style={litTile === i * 3 + j ? styles.gridTileLit : styles.gridTile} />
        ))}
      </View>
    ))}
  </View>
);

Grid.propTypes = {
  litTile: PropTypes.number,
};

Grid.defaultProps = {
  litTile: null,
};

export default Grid;
