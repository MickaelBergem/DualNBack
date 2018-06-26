import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { styles } from '../style/stylesheet';
import { GRID_SIZE, DELAY_RESPONSE } from '../config';
import SingleNBackEngine from '../engine/SingleNBackEngine';

import { gameFinished } from '../actions';

import Button from '../components/Button';
import ControlButton from '../components/ControlButton';
import Grid from '../components/Grid';


class Game extends React.Component {
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
      const { gameFinishedCb, navigation } = this.props;
      const score = this.engine.getScore();
      gameFinishedCb(score);
      clearInterval(this.interval);
      navigation.navigate('Score', { score });
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
            <Button
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

Game.propTypes = {
  N: PropTypes.number.isRequired,
  gameFinishedCb: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  N: state.game.level,
});

const mapDispatchToProps = dispatch => ({
  gameFinishedCb: score => dispatch(gameFinished(score)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
