import { POSITIONS_LS_KEY, TURNED_DEVICEC_LS_KEY } from './constants';
import { Position } from './device';

export const getValue = ((storage, key) => {
  const item = storage.getItem(key);
  if (typeof item === "string" && item !== "") {
    return JSON.parse(item);
  }

  return {};
});

export const setValue = (storage, key, value) => {
  storage.setItem(key, JSON.stringify(value || {}));
};

export const loadPositions = () => {
  const positions = getValue(window.localStorage, POSITIONS_LS_KEY);
  Object.keys(positions).forEach((k) => positions[k] = new Position(positions[k]));

  return positions;
};

export const savePositions = (positions) => {
  setValue(window.localStorage, POSITIONS_LS_KEY, positions);
};

export const loadTurnedDevices = () => {
  return getValue(window.localStorage, TURNED_DEVICEC_LS_KEY);
};

export const saveTurnedDevices = (turnedDevices) => {
  setValue(window.localStorage, TURNED_DEVICEC_LS_KEY, turnedDevices);
};
