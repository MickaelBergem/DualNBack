import { combineReducers } from 'redux';
import { computeNextLevel, saveScore } from './engine/scores';

const defaultState = {
  level: 2,
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_FINISHED':
      saveScore(action.score, state.level);
      return {
        level: computeNextLevel(action.score, state.level),
      };
    default:
      return state;
  }
};

export default combineReducers({
  game,
});
