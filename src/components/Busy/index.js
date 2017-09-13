import React from 'react';
import styled from 'styled-components';

const StyledBusy = styled.div`
  display: flex;
  height: 336px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.20);
  border-style: dashed;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

const Busy = ({ children }) => (
  <StyledBusy>
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </StyledBusy>
)

export default Busy;