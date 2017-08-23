import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledButton = styled.button`
	cursor: pointer;
  background: #cc2b5e;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  outline: 0;
  border: none;
  width: 100%;
  padding: 8px 15px 10px;
  line-height: 1.5;
  &:hover { background: #bd2354; }
`;

const Button = ({ children, onClick }) => (
  <StyledButton onClick={ onClick } >
    { children }
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: "Button",
  onClick: () => {}
};

export default Button;