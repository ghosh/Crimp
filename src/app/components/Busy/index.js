import React from 'react';
import styled, { keyframes } from 'styled-components';


const rotateFirst = keyframes`
  from { transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); }
  to { transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); }
`;

const rotateSecond = keyframes`
  from { transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); }
  to { transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); }
`;

const rotateThird = keyframes`
  from { transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); }
  to { transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); }
`;


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

const StyledLoader = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
`;

// eslint-disable-next-line
const StyledLoaderArm = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const StyledLoaderArmFirst = StyledLoaderArm.extend`
  left: 0%;
  top: 0%;
  animation: ${rotateFirst} 1s linear infinite;
  border-bottom: 3px solid #EFEFFA;
`;

const StyledLoaderArmSecond = StyledLoaderArm.extend`
  right: 0%;
  top: 0%;
  animation: ${rotateSecond} 1s linear infinite;
  border-right: 3px solid #EFEFFA;
`;

const StyledLoaderArmThird = StyledLoaderArm.extend`
  right: 0%;
  bottom: 0%;
  animation: ${rotateThird} 1s linear infinite;
  border-top: 3px solid #EFEFFA;
`;

const Busy = ({ children }) => (
  <StyledBusy>
    <StyledLoader>
      <StyledLoaderArmFirst />
      <StyledLoaderArmSecond />
      <StyledLoaderArmThird />
    </StyledLoader>
    <StyledBusyText>Optimizing files...</StyledBusyText>
  </StyledBusy>
)

export default Busy;