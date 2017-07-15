import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.section`
  height: 22px;
  -webkit-app-region: drag;
`;

const AppHeader = ({ children }) => (
  <StyledHeader>
    { children }
  </StyledHeader>
)

export default AppHeader