import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styles } from '../style/stylesheet';

import ControlButton from '../components/ControlButton';
import Grid from '../components/Grid';

import { GRID_SIZE, DELAY_RESPONSE } from '../config';

import SingleNBackEngine from '../engine/SingleNBackEngine';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tile: null,
      // Were the Position or Audio pressed?
      positionPressed: false,
      audioPressed: false,
    };
    const { N } = this.props;
    this.engine = new SingleNBackEngine(N, GRID_SIZE);
    this.interval = null;
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startGame() {
    this.setState({ gameStarted: true });
    this.interval = setInterval(() => { this.tick(); }, DELAY_RESPONSE);
  }

  tick() {
    const { positionPressed } = this.state;
    // Send the response to the engine
    const finished = this.engine.handleResponse(positionPressed);
    // Reset button state
    this.setState({
      positionPressed: false,
      audioPressed: false,
    });
    if (finished) {
      const { gameFinished } = this.props;
      gameFinished(this.engine.getScore());
      clearInterval(this.interval);
    } else {
      // Light a new tile
      this.lightTile(this.engine.generateNextStep());
    }
  }

  lightTile(tileID) {
    this.setState({ tile: tileID });
    setTimeout(() => this.setState({ tile: null }), 500);
  }

  render() {
    const {
      tile, positionPressed, audioPressed, gameStarted,
    } = this.state;
    const { N } = this.props;
    return (
      <View style={styles.container}>
        <Grid litTile={tile} />
        {gameStarted ? (
          <View style={styles.fxHorizontal}>
            <ControlButton
              title="Position match"
              pressed={positionPressed}
              onPress={() => this.setState({ positionPressed: true })}
            />
            <ControlButton
              title="Audio match"
              pressed={audioPressed}
              onPress={() => this.setState({ audioPressed: true })}
            />
          </View>
        ) : (
          <View style={styles.fxHorizontal}>
            <ControlButton
              title="Start game"
              onPress={() => this.startGame()}
            />
          </View>
        )}
        <Text style={styles.text}>
          {`N = ${N} // Step: ${this.engine.stepNumber}/${this.engine.totalSteps}`}
        </Text>
      </View>
    );
  }
}

App.propTypes = {
  N: PropTypes.number.isRequired,
  gameFinished: PropTypes.func.isRequired,
};

export default App;
