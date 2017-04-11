/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Par5 from '../../components/Par5';
import { connect } from 'react-redux';
import { getDeviceType, Position, setPosition } from './../../dmx';
import styled from 'styled-components';
import Positionable from '../../components/Positionable';
import { getUniverse } from '../../dmx/universe';
import { startRandom, stopRandom } from '../../dmx/random/actions';

const defaultPosition = new Position({ x: 0, y: 0 });
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class Universe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onMove: React.PropTypes.func.isRequired,
    devices: React.PropTypes.array.isRequired,
    deviceTypes: React.PropTypes.array.isRequired,
    positions: React.PropTypes.object.isRequired,
    universe: React.PropTypes.object.isRequired,
    universeId: React.PropTypes.number.isRequired,
  };

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Wrapper>
        <button value="blub" onClick={() => {
          this.props.startRandom(this.props.universeId);

          setTimeout(this.props.stopRandom, 4000)
        }}>blub</button>
        {this.props.devices.map(device => this.renderDevice(device))}
      </Wrapper>
    );
  }

  renderDevice(device) {
    const pos = this.props.positions[device.id];
    const deviceType = getDeviceType(this.props.deviceTypes, device.typeId);
    if (deviceType === null) {
      throw new Error(`Unable to find device type ${device.typeId}`);
    }

    return (
      <Positionable
        key={device.id}
        position={pos || defaultPosition}
        onPositionChange={(p) => this.props.onMove(device, p)}
      >

        {deviceType.key === "PAR5" &&
        <Par5 key={device.id} device={device} deviceType={deviceType} universe={this.props.universe} />
        }
      </Positionable>
    )
  };

}

const mapDispatchToProps = dispatch => ({
  onMove: (device, position) => dispatch(setPosition(device, position)),
  startRandom: (universeId) => dispatch(startRandom(universeId)),
  stopRandom: () => dispatch(stopRandom()),
});

const mapStateToProps = (state, route) => {
  const universeId = parseInt(route.params.universeId, 10) || 1;

  return ({
    devices: state.getIn(['dmx', 'devices']).toJS().filter(d => d.universe === universeId),
    deviceTypes: state.getIn(['dmx', 'deviceTypes']).toJS(),
    positions: state.getIn(['dmx', 'positions']).toJS(),
    universeId: universeId,
    universe: getUniverse(state.getIn(['dmx', 'universes']).toJS(), universeId),

  })
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Universe);
