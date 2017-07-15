import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const App = ({ children }) => (
  <StyledApp>
    { children }
  </StyledApp>
)

export default App;