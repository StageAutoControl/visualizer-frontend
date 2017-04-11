import { CONNECTED, CONNECTING, DISCONNECTED, ERRORED, MESSAGE_RECEIVED } from './constants';

export const connected = () => ({
  type: CONNECTED,
});

export const connecting = () => ({
  type: CONNECTING,
});

export const disconnected = () => ({
  type: DISCONNECTED,
});

export const messageReceived = (msg) => ({
  type: MESSAGE_RECEIVED,
  payload: {
    msg,
  },
});

export const errored = () => ({
  type: ERRORED,
});
