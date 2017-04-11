import { START_RANDOM, STOP_RANDOM } from './constants';

export const startRandom = (universeId) => ({
  type: START_RANDOM,
  payload: {
    universeId,
  },
});

export const stopRandom = () => ({
  type: STOP_RANDOM,
});
