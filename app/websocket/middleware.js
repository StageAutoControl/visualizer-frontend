import * as actions from './actions';
import { CONNECT, DISCONNECT } from './constants';
import { setDMXValues } from '../dmx/actions';

export const middleware = (function () {
  let socket = null;

  const onOpen = (ws, store) => evt => {
    store.dispatch(actions.connected(socket.url));
  };

  const onClose = (ws, store) => evt => {
    store.dispatch(actions.disconnected(evt.code + ': ' + mapCode(evt)));
  };

  const onError = (ws, store) => evt => {
    console.log(evt);
    store.dispatch(actions.error(evt.message));
  };

  const onMessage = (ws, store) => evt => {
    // store.dispatch(actions.messageReceived(evt.data));
    const data = evt.data.toString();
    const value = JSON.parse(data);

    if (value === null) {
      return;
    }

    console.log(value);

    store.dispatch(setDMXValues(value.dmxCommands))
  };

  return store => next => action => {
    switch (action.type) {

      case CONNECT:
        if (socket !== null) {
          socket.close();
        }

        store.dispatch(actions.connecting());

        socket = new WebSocket(action.payload.url);
        socket.binaryType = 'arraybuffer';
        socket.onmessage = onMessage(socket, store);
        socket.onclose = onClose(socket, store);
        socket.onopen = onOpen(socket, store);
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

export default middleware;

function mapCode(event) {
  // See http://tools.ietf.org/html/rfc6455#section-7.4.1
  if (event.code === 1000) {
    return "Normal closure, meaning that the purpose for which the connection was established has been fulfilled.";
  } else if (event.code === 1001) {
    return "An endpoint is \"going away\", such as a server going down or a browser having navigated away from a page.";
  } else if (event.code === 1002) {
    return "An endpoint is terminating the connection due to a protocol error";
  } else if (event.code === 1003) {
    return "An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message).";
  } else if (event.code === 1004) {
    return "Reserved. The specific meaning might be defined in the future.";
  } else if (event.code === 1005) {
    return "No status code was actually present.";
  } else if (event.code === 1006) {
    return "The connection was closed abnormally, e.g., without sending or receiving a Close control frame";
  } else if (event.code === 1007) {
    return "An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message).";
  } else if (event.code === 1008) {
    return "An endpoint is terminating the connection because it has received a message that \"violates its policy\". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.";
  } else if (event.code === 1009) {
    return "An endpoint is terminating the connection because it has received a message that is too big for it to process.";
  } else if (event.code === 1010) {
    // Note that this status code is not used by the server, because it can fail the WebSocket handshake instead.
    return "An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: " + event.reason;
  } else if (event.code === 1011) {
    return "A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.";
  } else if (event.code === 1015) {
    return "The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).";
  } else {
    return "Unknown reason";
  }
}
