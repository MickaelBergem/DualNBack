import { combineReducers } from 'redux';
import { computeNextLevel } from './engine/scores';

const defaultState = {
  level: 2,
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_FINISHED':
      // TODO: update level if score is beyond limits
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
