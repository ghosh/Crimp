import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Icon = styled.svg`
  width: 30px;
  height: 35px;
  margin: 0 5px;
`;

const CheckIcon = (props) => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 27">
    <g fill="none" fillRule="evenodd" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path fill="#D8DDEF" stroke="#D8DDEF" d="M20.437 25.202V26H1v-1.0638h.0084V1h12l7.4286 6.915v17.287zM13.0084 1v7.0652h7.4286" strokeLinecap="round" strokeLinejoin="round"/>
      <g stroke="#8BC34A" transform="translate(6.556 12.957)">
        <ellipse cx="4.444" cy="4.348" rx="4.444" ry="4.348"/>
        <path d="M3.333 4.393l.556.906 1.667-1.631" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </Icon>
)

export default CheckIcon;