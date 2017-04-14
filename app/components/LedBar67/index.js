/**
 *
 * LedBar67
 *
 */

import React from 'react';
import styled from 'styled-components';
import Led from '../Led';
import { getDMXValue } from '../../dmx/universe';
import DeviceTooltip from '../DeviceTooltip';
import Tooltip from 'react-tooltip';

const BarLed = styled(Led)`
  margin: 2px;
  line-height: 1;
  display: ${props => props.turned ? 'block' : 'inline-block'};
`;

const BarWrapper = styled.div`
  border: 1px solid blue;
  display: inline-block;
  background-color: black;
  line-height: 1;
`;

const Leds = styled.div`
  white-space: nowrap;
`;

const renderLed = (led, turned) => {
  return (
    <BarLed
      turned={turned}
      key={led.position}
      size={1}
      red={led.red}
      green={led.green}
      blue={led.blue}
      dimmer={led.dimmer}
      strobe={led.strobe}
    />
  )
};

function LedBar67(props) {
  // console.log('bar', props);
  let dimmer = 0, strobe = 0;

  if (props.deviceType.dimmerEnabled) {
    dimmer = getDMXValue(props.universe, props.device.startChannel + props.deviceType.dimmerChannel)
  }
  if (props.deviceType.strobeEnabled) {
    strobe = getDMXValue(props.universe, props.device.startChannel + props.deviceType.strobeChannel)
  }

  const leds = [];
  for (const led of props.deviceType.leds) {
    leds.push({
      position: led.position,
      red: getDMXValue(props.universe, props.device.startChannel + led.red),
      green: getDMXValue(props.universe, props.device.startChannel + led.green),
      blue: getDMXValue(props.universe, props.device.startChannel + led.blue),
      strobe,
      dimmer,
    })
  }

  return (
    <BarWrapper
      onDoubleClick={() => {
        props.turn();
      }}
    >
      <Leds
        data-tip
        data-for={props.device.id}
      >
        {leds.map(led => renderLed(led, props.turned))}
      </Leds>

      <Tooltip id={props.device.id} type="light" place="right" effect="float">
        <DeviceTooltip
          device={props.device}
          deviceType={props.deviceType}
          state={{ dimmer, strobe, leds }}
        />
      </Tooltip>
    </BarWrapper>
  );
}

LedBar67.propTypes = {
  turn: React.PropTypes.func.isRequired,
  turned: React.PropTypes.bool.isRequired,
  device: React.PropTypes.object.isRequired,
  deviceType: React.PropTypes.object.isRequired,
  universe: React.PropTypes.object.isRequired,
};

export default LedBar67;
