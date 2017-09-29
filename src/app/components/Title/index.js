import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p`
  padding-top: 4px;
  font-size: 12px;
  color: #4C4D6C;
  margin: 0;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-font-smoothing: antialiased;
`;

const Title = ({ children }) => (
  <StyledTitle>
    { children }
  </StyledTitle>
)

export default Title;