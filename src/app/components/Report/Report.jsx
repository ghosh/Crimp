import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledReport = styled.div`
  display: flex;
  flex-direction: column;
  height: 336px;
`;

const Report = ({ children }) => (
  <StyledReport>
		{ children }
  </StyledReport>
)

export default Report;