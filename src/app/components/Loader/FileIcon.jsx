import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Icon = styled.svg`
  width: 30px;
  height: 35px;
  margin: 0 5px;
`;

const FileIcon = (props) => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 27">
    <g fill="none" fillRule="evenodd" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path fill="#D8DDEF" stroke="#D8DDEF" d="M19.8947 25.202V26H.56v-1.0638h.0084V1h11.937l7.3893 6.915v17.287zM12.5053 1v7.0652h7.3894"/>
      <path stroke="#B8BFDA" d="M3.979 21.6522l3.4105-3.261 1.7052 1.087 3.4106-3.8043 3.979 5.978H3.9788zm2.842-6.5218c-.6278 0-1.1368-.4866-1.1368-1.087 0-.6002.509-1.087 1.137-1.087.6277 0 1.1367.4868 1.1367 1.087 0 .6004-.509 1.087-1.137 1.087z"/>
    </g>
  </Icon>
)

export default FileIcon;