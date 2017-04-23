import { Device, DeviceType } from './device';

export const loadDevices = () => {
  return Array
    .from(require('./data/dmx_devices.json'))
    .map(d => new Device(d));
};


export const loadDeviceTypes = () => {
  return Array
    .from(require('./data/dmx_device_types.json'))
    .map(dt => new DeviceType(dt))
};
