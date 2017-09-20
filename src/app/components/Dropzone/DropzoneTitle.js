import React from 'react';
import styled from 'styled-components';

export const StyledTitle = styled.p`
  font-size: 16px;
  width: 200px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-font-smoothing: antialiased;
`;

const DropzoneTitle = ({ children }) => (
  <StyledTitle>
    { children }
  </StyledTitle>
)

export default DropzoneTitle