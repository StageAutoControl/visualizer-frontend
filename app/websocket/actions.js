import {
  CONNECTED, CONNECTING, DISCONNECTED, ERROR, MESSAGE_RECEIVED, CONNECT, STATE_CONNECTED,
  STATE_CONNECTING, STATE_DISCONNECTED
} from './constants';

export const connected = (url) => ({
  type: CONNECTED,
  payload: {
    state: STATE_CONNECTED,
    url,
  },
});

export const connecting = () => ({
  type: CONNECTING,
  payload: {
    state: STATE_CONNECTING,

  },
});

export const disconnected = (errorMessage) => ({
  type: DISCONNECTED,
  payload: {
    state: STATE_DISCONNECTED,
    errorMessage,
  }
});

export const messageReceived = (msg) => ({
  type: MESSAGE_RECEIVED,
  payload: {
    msg,
  },
});

export const error = (errorMessage) => ({
  type: ERROR,
  payload: {
    errorMessage,
  },
});

export const connect = (url) => ({
  type: CONNECT,
  payload: {
    url,
  },
});
