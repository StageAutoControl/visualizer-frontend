/*
 *
 * ChannelTest
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { startRandom, stopRandom } from '../../dmx/random/actions';
import styled from 'styled-components';
import { getDMXValue, getUniverse } from '../../dmx';

const Container = styled.div`
  display: flex;
  flex-direction: row wrap;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: flex-start;
  width: 100%;
  height: 100%;
`;

const ChannelValue = styled.div`
  flex: 1;
  border: 1px solid rgba(255, 0, 0, 0.5);
  display: inline-block;
  text-align: center;
  margin: 5px;
  padding: 5px;
  white-space: nowrap;
`;

const universeId = -1;

const leftpad = (str) => ('000' + str).substring((str + "").length);

export class ChannelTest extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.startRandom(universeId);
  }

  componentWillUnmount() {
    this.props.stopRandom();
  }

  render() {
    const devices = [];

    for (let i = 0; i < 512; i++) {
      devices.push(
        <ChannelValue key={i}>
          {leftpad(i)}: {leftpad(getDMXValue(this.props.universe, i))}
        </ChannelValue>
      )
    }

    return (
      <Container>
        {devices}
      </Container>
    );
  }
}

ChannelTest.propTypes = {
  startRandom: PropTypes.func.isRequired,
  stopRandom: PropTypes.func.isRequired,
  universe: PropTypes.object.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  startRandom: (universeId) => dispatch(startRandom(universeId)),
  stopRandom: () => dispatch(stopRandom()),
})

const mapStateToProps = (state, props) => ({
  universe: getUniverse(state.getIn(['dmx', 'universes']).toJS(), universeId),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelTest);
