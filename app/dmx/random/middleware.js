import { START_RANDOM, STOP_RANDOM } from './constants';
import { setDMXValue } from '../actions';
let interval;

export const middleware = store => next => action => {
  switch (action.type) {
    case START_RANDOM:
      let channel = 0;
      interval = setInterval(() => {
        console.log('asdf');
        store.dispatch(setDMXValue(action.payload.universeId, (channel + 0) % 255, 255));
        store.dispatch(setDMXValue(action.payload.universeId, (channel + 1) % 255, 191));
        store.dispatch(setDMXValue(action.payload.universeId, (channel + 2) % 255, 127));
        store.dispatch(setDMXValue(action.payload.universeId, (channel + 3) % 255, 63));
        store.dispatch(setDMXValue(action.payload.universeId, (channel + 4) % 255, 0));
        channel++;
      }, 50);

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
