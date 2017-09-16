import React from 'react';
import styled from 'styled-components';

const StyledBusy = styled.div`
  display: flex;
  flex-direction: column;
  height: 336px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.20);
  border-style: dashed;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

const StyledBusyText = styled.p`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  font-size: 14px;
  margin-top: 25px;
  color: #d4d4d4;
`;

const Busy = ({ children }) => (
  <StyledBusy>
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
    <StyledBusyText>Optimizing files...</StyledBusyText>
  </StyledBusy>
)

export default Busy;