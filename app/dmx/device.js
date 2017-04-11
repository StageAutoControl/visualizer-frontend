export class DeviceType {
  constructor({
                id, key, name, channelCount, channelsPerLED,
                modeEnabled = false, modeChannel = 0,
                dimmerEnabled = false, dimmerChannel = 0,
                strobeEnabled = false, strobeChannel = 0,
                leds = [],
              }) {
    this.id = id;
    this.name = name;
    this.key = key;
    this.channelCount = channelCount;
    this.channelsPerLED = channelsPerLED;
    this.modeEnabled = modeEnabled;
    this.modeChannel = modeChannel;
    this.dimmerEnabled = dimmerEnabled;
    this.dimmerChannel = dimmerChannel;
    this.strobeEnabled = strobeEnabled;
    this.strobeChannel = strobeChannel;
    this.leds = leds;
  }
}

export class Device {
  constructor({ id, name, startChannel, typeId, universe }) {
    this.id = id;
    this.name = name;
    this.startChannel = startChannel;
    this.typeId = typeId;
    this.universe = universe;
  }
}


export class Position {
  constructor({ x = 0, y = 0 }) {
    this.x = x;
    this.y = y;
  }
}


export function getDeviceType(deviceTypes, id) {
  for (const d of deviceTypes) {
    if (d.id === id) {
      return d;
    }
  }

  return null;
}
