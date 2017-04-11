import { fromJS } from 'immutable';
import { SET_DMX_VALUE, SET_DMX_VALUES, SET_POSITION } from './constants';
import { loadPositions, savePositions } from './local';
import { loadDevices, loadDeviceTypes } from './data';

const initialState = fromJS({
  devices: loadDevices(),
  deviceTypes: loadDeviceTypes(),
  positions: loadPositions(),
  universes: { 1: {} },
});

const merge = (state, position) => {
  return state.setIn(['universes', position.universe, position.channel], position.value);
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSITION:
      state = state.setIn(['positions', action.payload.device.id], action.payload.position);
      savePositions(state.get('positions').toJS());
      return state;

    case SET_DMX_VALUE:
      return merge(state, action.payload);

    case SET_DMX_VALUES:
      for (const pos of action.payload) {
        state = merge(state, pos);
      }

      return state;
    default:
      return state;
  }
}
