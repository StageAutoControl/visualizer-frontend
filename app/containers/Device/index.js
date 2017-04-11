/*
 *
 * Device
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { getDeviceType, Position, setPosition } from '../../dmx';
import Par5 from '../../components/Par5';
import Positionable from '../../components/Positionable';
import { getUniverse } from '../../dmx/universe';

const defaultPosition = new Position({ x: 0, y: 0 });

const renderDevice = (device, deviceType, universe) => {
  if (deviceType.key === "PAR5") {
    return (
      <Par5 key={device.id} device={device} deviceType={deviceType} universe={universe} />
    )
  }
};

export class Device extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const pos = this.props.positions[this.props.device.id];

    const deviceType = getDeviceType(this.props.deviceTypes, this.props.device.typeId);
    if (deviceType === null) {
      throw new Error(`Unable to find device type ${this.props.device.typeId}`);
    }

    return (
      <Positionable
        key={this.props.device.id}
        position={pos || defaultPosition}
        onPositionChange={(p) => this.props.onMove(this.props.device, p)}
      >

        {renderDevice(this.props.device, deviceType, this.props.universe)}
      </Positionable>
    )
  };
}

Device.propTypes = {
  onMove: React.PropTypes.func,
  device: React.PropTypes.object.isRequired,
  positions: React.PropTypes.object,
  deviceTypes: React.PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
    onMove: (device, position) => dispatch(setPosition(device, position)),
});

const mapStateToProps = (state, props) => ({
  deviceTypes: state.getIn(['dmx', 'deviceTypes']).toJS(),
  positions: state.getIn(['dmx', 'positions']).toJS(),
  universe: getUniverse(state.getIn(['dmx', 'universes']).toJS(), props.device.universe),
});

export default connect(mapStateToProps, mapDispatchToProps)(Device);
