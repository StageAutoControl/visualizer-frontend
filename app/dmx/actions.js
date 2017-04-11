import { SET_DMX_VALUE, SET_POSITION } from './constants';

export const setPosition = (device, position) => {
  return {
    type: SET_POSITION,
    payload: {
      device,
      position
    }
  }
};

export const setDMXValue = (universe, channel, value) => {
  return {
    type: SET_DMX_VALUE,
    payload: {
      universe,
      channel,
      value,
    }
  };
};
