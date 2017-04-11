import { fromJS } from 'immutable';
import { SET_DMX_VALUE, SET_POSITION } from './constants';
import { loadPositions, savePositions } from './local';
import { loadDevices, loadDeviceTypes } from './data';

const initialState = fromJS({
  devices: loadDevices(),
  deviceTypes: loadDeviceTypes(),
  positions: loadPositions(),
  universes: { 1: {} },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSITION:
      state = state.setIn(['positions', action.payload.device.id], action.payload.position);
      savePositions(state.get('positions').toJS());
      return state;

    case SET_DMX_VALUE:
      console.log(action.payload);
      return state.setIn(['universes', action.payload.universe, action.payload.channel], action.payload.value);

    default:
      return state;
  }
}
