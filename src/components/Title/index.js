import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p`
  padding-top: 6px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
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