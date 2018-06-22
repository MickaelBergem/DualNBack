import React from 'react';
import {
  View, StatusBar, Button,
} from 'react-native';
import { styles } from './style/stylesheet';

import Game from './views/Game';
import Score from './views/Score';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'game',
    };
    this.score = null;
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  gameFinished(scores) {
    this.score = scores;
    this.setState({ status: 'score' });
  }

  render() {
    const { status } = this.state;
    return (
      <View style={styles.container}>
        {status === 'game'
          && <Game N={3} gameFinished={scores => this.gameFinished(scores)} />
        }
        {status === 'score'
          && (
            <View style={[styles.container, styles.fxAround, styles.padded]}>
              <Score score={this.score} />
              <Button
                title="Continue"
                onPress={() => this.setState(prevState => ({
                  status: 'game',
                  N: prevState.N + 1,
                }))}
              />
            </View>
          )
        }
      </View>
    );
  }
}
