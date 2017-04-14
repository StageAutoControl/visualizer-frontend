/*
 * AllUniverses
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import Device from '../Device';
import { UniverseWrapper } from '../../components/UniverseWrapper';

class AllUniverses extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    devices: React.PropTypes.array.isRequired,
  };

  render() {
    return (
      <UniverseWrapper>
        {this.props.devices.map(device => (
          <Device key={device.id} device={device} />
        ))}
      </UniverseWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = (state, route) => ({
  devices: state.getIn(['dmx', 'devices']).toJS(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(AllUniverses);
