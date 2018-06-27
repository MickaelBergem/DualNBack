/*
  Single N Back engine
*/
import { getRandomInt } from './utils';

const Engine = (N, gridSize) => {
  this.N = N;
  this.gridSize = gridSize ** 2;
  // The array of tiles
  this.serie = [];
  // The number of time steps already spent
  this.stepNumber = 0;
  this.totalSteps = 20 + N;
  // The number of times the user successfully matched the position
  this.positionHit = 0;
  // The number of times the user mispressed the button (false positive or false negative)
  this.positionMiss = 0;

  return this;
};

Engine.prototype = new Engine();

Engine.prototype.generateNextStep = (forcedTile = null) => {
  const tile = forcedTile || getRandomInt(this.gridSize);
  this.serie.push(tile);
  this.stepNumber += 1;
  return tile;
};

// Takes the user response and refresh the scores. Returns true if the game is finished.
Engine.prototype.handleResponse = (positionPressed) => {
  const shouldPressPosition = (this.stepNumber > this.N)
    && (this.serie[this.serie.length - this.N - 1] === this.serie[this.serie.length - 1]);

  if (positionPressed && shouldPressPosition) {
    console.log('HIT');
    this.positionHit += 1;
  }
  if (positionPressed !== shouldPressPosition) {
    // False negative or false negative
    console.log('MISS');
    this.positionMiss += 1;
  }

  return this.stepNumber === this.totalSteps;
};

// Ratio of "good answers" over "total occasions"
Engine.prototype.computeRatio = () => {
  const hit = this.positionHit;
  const miss = this.positionMiss;
  return ((hit + miss) === 0) ? 1.0 : Math.round(100 * hit / (hit + miss)) / 100.0;
};

Engine.prototype.getScore = () => ({
  position: {
    hit: this.positionHit,
    miss: this.positionMiss,
  },
  ratio: this.computeRatio(),
});

export default Engine;
