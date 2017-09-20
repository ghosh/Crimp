import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.section`
  height: 22px;
  -webkit-app-region: drag;
`;

const WidgetHeader = ({ children }) => (
  <StyledHeader>
    { children }
  </StyledHeader>
)

export default WidgetHeader