import { Device, DeviceType } from './device';

export const loadDevices = () => {
  return Array
    .from(require('./data/dmx_devices.json').dmx_devices)
    .map(d => new Device(d));
};

export const loadDeviceTypes = () => {
  return Array
    .from(require('./data/dmx_device_types.json').dmx_device_types)
    .map(dt => new DeviceType(dt))
};
