import { START_RANDOM, STOP_RANDOM } from './constants';
import { setDMXValues } from '../actions';
let interval;

export const middleware = store => next => action => {
  switch (action.type) {
    case START_RANDOM:
      let channel = 0;
      interval = setInterval(() => {
        const values = [];

        for (let i = 0; i < 10; i++) {
          values.push({
            universe: action.payload.universeId,
            channel: getRandomInt(0, 511),
            value: getRandomInt(0, 255),
          });
        }

        store.dispatch(setDMXValues(values));

        channel++;
      }, 10);

      break;

    case STOP_RANDOM:
      if (interval) {
        clearInterval(interval);
        interval = null;
      }

      break;

    default:
      return next(action);
  }
};


/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
