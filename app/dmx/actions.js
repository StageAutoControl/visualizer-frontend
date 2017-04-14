import { SET_DMX_VALUE, SET_DMX_VALUES, SET_POSITION, TURN_DEVICE } from './constants';

export const setPosition = (device, position) => ({
  type: SET_POSITION,
  payload: {
    device,
    position
  }
});

export const setDMXValue = (universe, channel, value) => ({
  type: SET_DMX_VALUE,
  payload: {
    universe,
    channel,
    value,
  }
});

export const setDMXValues = (values) => ({
  type: SET_DMX_VALUES,
  payload: values,
});

export const turnDevice = (deviceId) => ({
  type: TURN_DEVICE,
  payload: {
    deviceId,
  },
});
