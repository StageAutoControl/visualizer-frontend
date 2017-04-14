/**
 *
 * DeviceTooltip
 *
 */

import React from 'react';
import styled from 'styled-components';

const TooltipText = styled.div`
  position: relative;
  width: auto;
  min-width: 400px;
  height: auto;
  min-height: 100px;
  display: flex;
`;

const Column = styled.div`
flex: 1;
`;

const H5 = styled.h5`
  line-height: 10px;
  margin: 0;
`;

const P = styled.p`
  margin: 0;
  margin-bottom: 5px;
`;

function DeviceTooltip(props) {
  return (
    <TooltipText>
      <Column>
        <H5>Device</H5>
        <P>
          {props.device.id}<br />
          {props.device.name}<br />
          {props.device.universe} | {props.device.startChannel}
        </P>
        <H5>DeviceType</H5>
        <P>
          {props.deviceType.id}<br />
          {props.deviceType.name}
        </P>
      </Column>
      { props.state &&
      <Column>
        Dimmer: {props.state.dimmer}<br />
        Strobe: {props.state.strobe}<br />
        LEDs: <br />
        {Array.from(props.state.leds).map((led, i) => (
          <P key={i*3}>@{led.position} | R:{led.red} G:{led.green} B:{led.blue}</P>
        ))}
      </Column>
      }
    </TooltipText>
  );
}

DeviceTooltip.propTypes = {
  device: React.PropTypes.object.isRequired,
  deviceType: React.PropTypes.object.isRequired,
  state: React.PropTypes.object,
};

export default DeviceTooltip;
