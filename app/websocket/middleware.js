import * as actions from './actions';
import { CONNECT, DISCONNECT } from './constants';

const socketMiddleware = (function () {
  let socket = null;

  const onOpen = (ws, store, token) => evt => {
    store.dispatch(actions.connected());
  };

  const onClose = (ws, store) => evt => {
    store.dispatch(actions.disconnected());
  };

  const onError = (ws, store) => evt => {
    store.dispatch(actions.errored());
  };

  const onMessage = (ws, store) => evt => {
    store.dispatch(actions.messageReceived(evt.data));
  };

  return store => next => action => {
    switch (action.type) {

      case CONNECT:
        if (socket !== null) {
          socket.close();
        }

        store.dispatch(actions.connecting());

        socket = new WebSocket(action.url);
        socket.onmessage = onMessage(socket, store);
        socket.onclose = onClose(socket, store);
        socket.onopen = onOpen(socket, store, action.token);
        socket.onerror = onError(socket, store);

        break;

      case DISCONNECT:
        if (socket !== null) {
          socket.close();
        }
        socket = null;

        store.dispatch(actions.disconnected());
        break;

      default:
        return next(action);
    }
  }
})();

export default socketMiddleware;
