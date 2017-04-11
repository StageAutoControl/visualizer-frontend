/**
 *
 * Positionable
 *
 */

import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: move;
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  top: ${props => props.position.y}px;
  left: ${props => props.position.x}px;
`;

class Positionable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Draggable
        grid={[25, 25]}
        position={{x: 0, y: 0}}
        onStop={(e, { x, y }) => {
          x += this.props.position.x;
          y += this.props.position.y;
          this.props.onPositionChange({ x, y });
        }}
      >
        <Wrapper position={this.props.position}>
          {React.Children.toArray(this.props.children)}
        </Wrapper>
      </Draggable>
    );
  }
}

Positionable.propTypes = {
  children: React.PropTypes.node,
  position: React.PropTypes.object.isRequired,
  onPositionChange: React.PropTypes.func.isRequired,
};

export default Positionable;
