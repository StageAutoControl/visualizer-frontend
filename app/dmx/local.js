import { POSITIONS_LS_KEY } from './constants';
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
