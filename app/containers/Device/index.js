/**
 *
 * Device
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { getDeviceType, getUniverse, Position, setPosition, turnDevice } from '../../dmx';
import Par5 from '../../components/Par5';
import Positionable from '../../components/Positionable';
import LedBar67 from '../../components/LedBar67';

const defaultPosition = new Position({ x: 0, y: 0 });

export class Device extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderDevice(device, deviceType, universe) {
    if (!deviceType.key) {
      throw new Error(`Device type ${deviceType.id} of device ${device.id} does not have a key.`);
    }

    if (deviceType.key === "PAR5") {
      return (
        <Par5
          key={device.id}
          device={device}
          deviceType={deviceType}
          universe={universe}
        />
      )
    }

    if (deviceType.key === "LEDBar67") {
      return (
        <LedBar67
          key={device.id}
          device={device}
          deviceType={deviceType}
          universe={universe}
          turn={this.props.turn.bind(null, device.id)}
          turned={this.props.isTurned}
        />
      )
    }

    return deviceType.key;
  };

  render() {
    const pos = this.props.positions[this.props.device.id];

    const deviceType = getDeviceType(this.props.deviceTypes, this.props.device.typeId);
    if (deviceType === null) {
      throw new Error(`Unable to find device type ${this.props.device.typeId}`);
    }

    return (
      <Positionable
        // style={{zIndex: }}
        key={this.props.device.id}
        position={pos || defaultPosition}
        onPositionChange={(p) => this.props.onMove(this.props.device, p)}
      >
        {this.renderDevice(this.props.device, deviceType, this.props.universe)}
      </Positionable>
    )
  };
}

Device.propTypes = {
  onMove: React.PropTypes.func,
  device: React.PropTypes.object.isRequired,
  positions: React.PropTypes.object,
  deviceTypes: React.PropTypes.array,
  isTurned: React.PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onMove: (device, position) => dispatch(setPosition(device, position)),
  turn: (deviceId) => dispatch(turnDevice(deviceId)),
});

const mapStateToProps = (state, props) => ({
  isTurned: state.getIn(['dmx', 'turnedDevices', props.device.id]) || false,
  deviceTypes: state.getIn(['dmx', 'deviceTypes']).toJS(),
  positions: state.getIn(['dmx', 'positions']).toJS(),
  universe: getUniverse(state.getIn(['dmx', 'universes']).toJS(), props.device.universe),
});

export default connect(mapStateToProps, mapDispatchToProps)(Device);
