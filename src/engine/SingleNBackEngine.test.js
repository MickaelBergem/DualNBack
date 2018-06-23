import SingleNBackEngine from './SingleNBackEngine';


it('has properties', () => {
  const N = 1;
  const engine = new SingleNBackEngine(N, 3);
  expect(engine.stepNumber).toBe(0);

  const tile = engine.generateNextStep();
  expect(tile).toBeGreaterThanOrEqual(0);
  expect(tile).toBeLessThanOrEqual(9);
  // Force tile
  const tile2 = engine.generateNextStep(8);
  expect(tile2).toBe(8);

  expect(engine.serie).toEqual([tile, 8]);
});

it('computes the score for N=2', () => {
  const N = 2;
  const engine = new SingleNBackEngine(N, 3);
  // First move, first answer
  engine.generateNextStep(1);
  engine.handleResponse(false);
  expect(engine.positionMiss).toBe(0);

  engine.generateNextStep(8);
  engine.handleResponse(false);
  expect(engine.positionMiss).toBe(0);

  expect(engine.positionMiss).toBe(0);
  engine.generateNextStep(1); // Occasion
  engine.handleResponse(false); // Missed occasion
  expect(engine.positionMiss).toBe(1);
  expect(engine.positionHit).toBe(0);

  engine.generateNextStep(8); // Occasion
  engine.handleResponse(true); // Hit
  expect(engine.positionMiss).toBe(1);
  expect(engine.positionHit).toBe(1);

  engine.generateNextStep(6);
  engine.handleResponse(false);
  expect(engine.positionMiss).toBe(1);
  expect(engine.positionHit).toBe(1);

  // Second missed occasion
  engine.generateNextStep(6);
  engine.handleResponse(true);
  expect(engine.positionMiss).toBe(2);
  expect(engine.positionHit).toBe(1);

  engine.generateNextStep(2); // No occasion
  engine.handleResponse(true); // False positive
  expect(engine.positionMiss).toBe(3);
  expect(engine.positionHit).toBe(1);

  expect(engine.computeRatio()).toBe(0.25);
});

it('computes the score for N=3', () => {
  const N = 3;
  const engine = new SingleNBackEngine(N, 3);
  engine.generateNextStep(1);
  engine.handleResponse(false);
  engine.generateNextStep(8);
  engine.handleResponse(false);
  engine.generateNextStep(1);
  engine.handleResponse(false);
  expect(engine.positionMiss).toBe(0);
  expect(engine.positionHit).toBe(0);

  engine.generateNextStep(8);
  engine.handleResponse(false);
  expect(engine.positionMiss).toBe(0);
  expect(engine.positionHit).toBe(0);

  engine.generateNextStep(8);
  engine.handleResponse(true);
  expect(engine.positionMiss).toBe(0);
  expect(engine.positionHit).toBe(1);
});
