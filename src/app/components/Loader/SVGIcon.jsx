import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Icon = styled.svg`
  width: 30px;
  height: 35px;
  margin: 0 5px;
`;

const SvgIcon = (props) => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 27">
	  <g fill="none" fillRule="evenodd" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
	    <path fill="#D8DDEF" stroke="#D8DDEF" d="M20 25.202V26H.563v-1.0638h.0084V1h12L20 7.915v17.287zM12.5714 1v7.0652H20"/>
	    <path stroke="#45B5F5" d="M12.572 14.043l3.429 3.261-3.429 3.261m-4.572 0l-3.429-3.261L8 14.043"/>
	  </g>
  </Icon>
)

export default SvgIcon;