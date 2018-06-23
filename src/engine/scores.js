import { SCORE_UPGRADE, SCORE_DOWNGRADE, MIN_LEVEL } from '../config';

export const computeEvolution = (score, currentLevel = MIN_LEVEL + 1) => {
  if (score.ratio >= SCORE_UPGRADE) {
    return 1;
  }
  if (currentLevel === MIN_LEVEL) {
    // Cannot drop below anyway
    return 0;
  }
  if (score.ratio < SCORE_DOWNGRADE) {
    return -1;
  }
  return 0;
};

// Return the next level given the current results of the user
export const computeNextLevel = (score, currentLevel) => (
  computeEvolution(score, currentLevel) + currentLevel
);
