/**
*
* Led
*
*/

import React from 'react';
import styled, {css} from 'styled-components';

const aVal = (value) => 1 - 1 / (255 / value);

const Led = styled.div`
  display: inline-block;
  width: ${props => props.size * 20}px;
  height: ${props => props.size * 20}px;
  border-radius: ${props => (props.size -1) * 20}px;
  ${(props) => {
  if (props.strobe > 0) {
    return css`
			background-color: rgba(255, 255, 255, ${props => aVal(props.strobe)});
		`;
  } else {
    return css`
      background-color: rgba(${props => props.red}, ${props => props.green}, ${props => props.blue}, ${props => aVal(props.dimmer)});
    `;
  }
}}
  line-height: 1;
`;

Led.propTypes = {
  size: React.PropTypes.number,
  dimmer: React.PropTypes.number.isRequired,
  strobe: React.PropTypes.number,
  red: React.PropTypes.number.isRequired,
  green: React.PropTypes.number.isRequired,
  blue: React.PropTypes.number.isRequired,
  white: React.PropTypes.number,
};

Led.defaultProps = {
  size: 1,
};

export default Led;
