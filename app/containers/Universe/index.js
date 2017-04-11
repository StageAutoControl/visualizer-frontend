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
import { connect } from 'react-redux';
import styled from 'styled-components';
import Device from '../Device';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class Universe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    devices: React.PropTypes.array.isRequired,
    universeId: React.PropTypes.number.isRequired,
  };

  render() {
    return (
      <Wrapper>
        {this.props.devices.map(device => (
          <Device key={device.id} device={device} />
        ))}
      </Wrapper>
    );
  }

}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = (state, route) => {
  const universeId = parseInt(route.params.universeId, 10) || 1;

  return ({
    devices: state.getIn(['dmx', 'devices']).toJS().filter(d => d.universe === universeId),
    universeId: universeId,
  })
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Universe);
