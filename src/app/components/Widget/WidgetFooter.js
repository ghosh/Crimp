import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.section`
	padding: 0 10px;
`;

const WidgetFooter = ({ children }) => (
  <StyledFooter>
    { children }
  </StyledFooter>
)

export default WidgetFooter;