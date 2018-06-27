import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './views/Home';
import GameScreen from './views/Game';
import ScoreScreen from './views/Score';
import StatsScreen from './views/Stats';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    path: '',
  },
  Game: {
    screen: GameScreen,
    path: 'game',
  },
  Score: {
    screen: ScoreScreen,
  },
  Stats: {
    screen: StatsScreen,
    path: 'stats',
  },
}, {
  initialRouteName: 'Home',
});

export default () => <RootStack />;
