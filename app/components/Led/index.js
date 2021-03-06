/**
*
* Led
*
*/

import React from 'react';
import styled, {css} from 'styled-components';

const aVal = (value) => 1 - 1 / (255 / value);

const rgbwa = (props) => {
  if (props.white > 0) {
    props.red = props.green = props.blue = props.white;
  }

  return css`rgba(${props => props.red}, ${props => props.green}, ${props => props.blue}, ${props => aVal(props.dimmer)})`;
};

const Led = styled.div`
  display: inline-block;
  width: ${props => props.size * 20}px;
  height: ${props => props.size * 20}px;
  border-radius: ${props => (props.size * 20) / 2}px;
  background-color: ${props => rgbwa(props)};
  line-height: 1;
`;

Led.propTypes = {
  size: React.PropTypes.number,
  dimmer: React.PropTypes.number,
  strobe: React.PropTypes.number,
  red: React.PropTypes.number.isRequired,
  green: React.PropTypes.number.isRequired,
  blue: React.PropTypes.number.isRequired,
  white: React.PropTypes.number,
};

Led.defaultProps = {
  size: 1,
  dimmer: 0,
  strobe: 0,
  white: 0,
};

export default Led;
