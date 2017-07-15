import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.section`
  padding: 5px 10px 10px 10px;
  flex: 1;
`;

const AppBody = ({ children }) => (
  <StyledBody>
    { children }
  </StyledBody>
)

export default AppBody