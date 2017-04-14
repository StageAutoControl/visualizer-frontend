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

const grid = 20;

const fixPosition = (p) => {
  const diff = p % grid;

  if (diff > grid / 2) {
    return p + (grid - diff);
  }

  return p - diff;
};

class Positionable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Draggable
        grid={[grid, grid]}
        position={{ x: 0, y: 0 }}
        onStop={(e, { x, y }) => {

          x += this.props.position.x;
          y += this.props.position.y;

          x = fixPosition(x);
          y = fixPosition(y);

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
