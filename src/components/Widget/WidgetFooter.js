import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.section`
	padding: 0 10px;
`;

const AppFooter = ({ children }) => (
  <StyledFooter>
    { children }
  </StyledFooter>
)

export default AppFooter;