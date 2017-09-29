import React from 'react';
import styled, { keyframes } from 'styled-components';

import FileIcon from './FileIcon';
import PlayIcon from './PlayIcon';
import SVGIcon from './SVGIcon';
import CheckIcon from './CheckIcon';
import Processor from './Processor';

const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  height: 336px;
  justify-content: center;
  align-items: center;
`;

const StyledLoaderText = styled.p`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  margin-top: 15px;
  color: #5F6185;
`;

const Conveyor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    background: linear-gradient(to right, #e6eaf5, rgba(230, 234, 245, 0), rgba(230, 234, 245, 0), #e6eaf5);
    z-index: 1;
  }
`;

const moveBelt = keyframes`
  from { transform: translate3d(0, 0, 0); }
  from { transform: translate3d(-40px, 0, 0); }
`;

const Belt = styled.div`
  display: flex;
`;

const LeftBelt = Belt.extend`
  position: absolute;
  left: 0px;
  animation: ${moveBelt} 1s linear infinite;
`;

const RightBelt = Belt.extend`
  position: absolute;
  right: -40px;
  animation: ${moveBelt} 1s linear infinite;
`;

const Loader = ({ children }) => (
  <StyledLoader>
    <Conveyor>
      <LeftBelt>
        <FileIcon />
        <PlayIcon />
        <SVGIcon />
        <FileIcon />
      </LeftBelt>
      <Belt>
        <Processor />
      </Belt>
      <RightBelt>
        <CheckIcon />
        <CheckIcon />
        <CheckIcon />
        <CheckIcon />
      </RightBelt>
    </Conveyor>
    <StyledLoaderText>Optimizing files...</StyledLoaderText>
  </StyledLoader>
)

export default Loader;