export const gameFinished = score => ({
  type: 'GAME_FINISHED',
  score,
});

export const completeSerie = () => ({
  type: 'COMPLETE_SERIE',
});
