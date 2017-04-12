import { fromJS } from 'immutable';
import { CONNECTED, CONNECTING, DISCONNECTED, ERROR, STATE_DISCONNECTED } from './constants';

const initialState = fromJS({
  state: STATE_DISCONNECTED,
  url: '',
  errorMessage: ''
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CONNECTING:
    case CONNECTED:
    case DISCONNECTED:
    case ERROR:

      return state.merge(action.payload);

    default:
      return state;
  }
}

export default reducer;
