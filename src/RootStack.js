import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './views/Home';
import GameScreen from './views/Game';
import ScoreScreen from './views/Score';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Game: {
    screen: GameScreen,
  },
  Score: {
    screen: ScoreScreen,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

export default () => <RootStack />;
