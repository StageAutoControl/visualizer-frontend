/**
*
* Par5
*
*/

import React from 'react';
import styled from 'styled-components';
import Tooltip from 'react-tooltip';
import Led from '../Led';
import DeviceTooltip from '../DeviceTooltip';
import {getDMXValue} from '../../dmx';

const ParLed = styled(Led)`
  margin: 2px;
  line-height: 1;
`;

const ParWrapper = styled.div`
  border: 1px solid red;
  display: inline-block;
  background-color: black;
  line-height: 1;
`;

function Par5(props) {
  let dimmer = 0, strobe = 0;

  if (props.deviceType.dimmerEnabled) {
    dimmer = getDMXValue(props.universe, props.device.startChannel + props.deviceType.dimmerChannel)
  }
  if (props.deviceType.strobeEnabled) {
    strobe = getDMXValue(props.universe, props.device.startChannel + props.deviceType.strobeChannel)
  }

  const red = getDMXValue(props.universe, props.device.startChannel + props.deviceType.leds[0].red);
  const green = getDMXValue(props.universe, props.device.startChannel + props.deviceType.leds[0].green);
  const blue = getDMXValue(props.universe, props.device.startChannel + props.deviceType.leds[0].blue);

  return (
    <ParWrapper>
      <ParLed
        data-tip
        data-for={props.device.id}
        size={2}
        red={red}
        green={green}
        blue={blue}
        dimmer={dimmer}
        strobe={strobe}
      />

      <Tooltip id={props.device.id} type="light" place="right" effect="float">
        <DeviceTooltip device={props.device} deviceType={props.deviceType}/>
      </Tooltip>
    </ParWrapper>
  );
}

Par5.propTypes = {
  device: React.PropTypes.object.isRequired,
  deviceType: React.PropTypes.object.isRequired,
  universe: React.PropTypes.object.isRequired,
};

export default Par5;
