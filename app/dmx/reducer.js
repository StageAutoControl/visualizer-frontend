import { fromJS } from 'immutable';
import { SET_DMX_VALUE, SET_DMX_VALUES, SET_POSITION, TURN_DEVICE } from './constants';
import { loadPositions, loadTurnedDevices, savePositions, saveTurnedDevices } from './local';
import { loadDevices, loadDeviceTypes } from './data';

const initialState = fromJS({
  devices: loadDevices(),
  deviceTypes: loadDeviceTypes(),
  positions: loadPositions(),
  universes: { 1: {} },
  turnedDevices: loadTurnedDevices(),
});

console.log(initialState);

console.log(`Loaded ${initialState.get('devices').size} Devices`);
console.log(`Loaded ${initialState.get('deviceTypes').size} DeviceTypes`);

const merge = (state, position) => {
  return state.setIn(['universes', position.universe, position.channel], position.value);
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSITION:
      state = state.setIn(['positions', action.payload.device.id], action.payload.position);
      savePositions(state.get('positions').toJS());
      return state;

    case SET_DMX_VALUE:
      return merge(state, action.payload);

    case SET_DMX_VALUES:
      for (const val of action.payload) {
        state = merge(state, val);
      }

      return state;

    case TURN_DEVICE:
      const oldTurned = state.getIn(['turnedDevices', action.payload.deviceId]) || false;
      state = state.setIn(['turnedDevices', action.payload.deviceId], !oldTurned);
      saveTurnedDevices(state.get('turnedDevices').toJS());
      return state;

    default:
      return state;
  }
}

export default reducer;
