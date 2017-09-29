import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Icon = styled.svg`
  width: 30px;
  height: 35px;
  margin: 0 5px;
`;

const PlayIcon = (props) => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 27">
    <g fill="none" fillRule="evenodd" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
	    <path fill="#D8DDEF" stroke="#D8DDEF" d="M19.8947 25.202V26H.56v-1.0638h.0084V1h11.937l7.3893 6.915v17.287zM12.5053 1v7.0652h7.3894"/>
	    <path stroke="#EE5F55" d="M7.958 21.109v-6.522l6.253 3.261z"/>
    </g>
  </Icon>
)

export default PlayIcon;