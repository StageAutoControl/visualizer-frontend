/**
*
* DeviceTooltip
*
*/

import React from 'react';
import styled from 'styled-components';

const TooltipText = styled.div`
  width: auto;
  min-width: 400px;
  height: auto;
  min-height: 100px;
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
      <H5>Device</H5>
      <P>
        {props.device.id}<br/>
        {props.device.name}<br />
        {props.device.startChannel}
      </P>
      <H5>DeviceType</H5>
      <P>
        {props.deviceType.id}<br/>
        {props.deviceType.name}
      </P>
    </TooltipText>
  );
}

DeviceTooltip.propTypes = {
  device: React.PropTypes.object.isRequired,
  deviceType: React.PropTypes.object.isRequired,
};

export default DeviceTooltip;
