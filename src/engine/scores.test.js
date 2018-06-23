import { computeNextLevel } from './scores';
import { SCORE_UPGRADE, SCORE_DOWNGRADE } from '../config';

const newScore = () => ({
  position: {
    hit: 10,
    miss: 1,
  },
  ratio: (SCORE_UPGRADE + SCORE_DOWNGRADE) / 2,
});

it('returns the current level if score normal', () => {
  const score = newScore();
  const currentLevel = 3;
  expect(computeNextLevel(score, currentLevel)).toBe(currentLevel);
});

it('upgrades the level if score high', () => {
  const score = newScore();
  score.ratio = 0.99;
  const currentLevel = 3;
  expect(computeNextLevel(score, currentLevel)).toBe(currentLevel + 1);
});

it('downgrades the level if score low', () => {
  const score = newScore();
  score.ratio = 0.33;
  const currentLevel = 3;
  expect(computeNextLevel(score, currentLevel)).toBe(currentLevel - 1);
});

it('cannot drop below 2', () => {
  const score = newScore();
  score.ratio = 0.10;
  const currentLevel = 2;
  expect(computeNextLevel(score, currentLevel)).toBe(currentLevel);
});
