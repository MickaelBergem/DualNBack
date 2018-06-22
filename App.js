import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { styles } from './style/stylesheet';

import ControlButton from './components/ControlButton';
import Grid from './components/Grid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tile: 0,
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true);
    setInterval(() => this.setState(prevState => ({ tile: (prevState.tile + 1) % 9 })), 400);
  }

  render() {
    const { tile } = this.state;
    return (
      <View style={styles.container}>
        <Grid litTile={tile} />
        <View style={styles.fxHorizontal}>
          <ControlButton title="Position match" onPress={() => {}} />
          <ControlButton title="Audio match" onPress={() => {}} />
        </View>
        <Text>
          Shake your phone to open the developer menu.
        </Text>
      </View>
    );
  }
}
