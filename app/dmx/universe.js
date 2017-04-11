export const getDMXValue = (universe, channel) => {
  return universe[channel] || 0;
};

export const getUniverse = (universes, index) => {
  return universes[index] || {};
};
