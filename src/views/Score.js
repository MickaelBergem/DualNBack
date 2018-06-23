import React from 'react';
import Score from '../components/Score';

const ScoreView = ({ navigation }) => {
  const score = navigation.getParam('score');
  if (!score) {
    navigation.navigate('Home');
    return null;
  }
  return <Score score={score} nextGameCb={() => navigation.push('Game')} />;
};

export default ScoreView;
