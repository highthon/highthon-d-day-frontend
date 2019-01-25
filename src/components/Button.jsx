import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 166px;
  height: 53px;
  border-radius: 5px;
  background-color: #4285f4;
  font-size: 20px;
  color: #fff;
`;

export default class Button extends Component {
  shouldComponentUpdate = () => false

  render() {
    const { text, onClick } = this.props;
    return (
      <StyledButton onClick={onClick}>
        {text}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
