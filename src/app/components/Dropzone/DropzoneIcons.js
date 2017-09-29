import React from 'react';
import styled, { keyframes } from 'styled-components';

export const SVGcontainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
  min-height: 50px;
`;

const rotateHand = keyframes`
  from { transform: rotate(-15deg)}
  to { transform: rotate(15deg) }
`;

export const Icon = styled.div`
  will-change: transform;
  transition: transform 0.3s ease;
  position: absolute;
`;

const GifIcon = Icon.extend`
  left: 30px;
  transform: rotate(-20deg) scale(0.8);
  ${props => {
    if (props.disabled) return `display: none;`;
    if (props.hover) return `transform: translate3d(-10px,-10px,0) rotate(-20deg) scale(0.8);`;
  }}
`;

const ImageIcon = Icon.extend`
  bottom: 10px;
  ${props => {
    if (props.disabled) return `display: none;`;
    if (props.hover) return `transform: translate3d(0,-10px,0);`;
  }}
`;

const SvgIcon = Icon.extend`
  right: 30px;
  transform: rotate(20deg) scale(0.8);
  ${props => {
    if (props.disabled) return `display: none;`;
    if (props.hover) return `transform: translate3d(10px,-10px,0) rotate(20deg) scale(0.8);`;
  }}
`;

const StopIcon = Icon.extend`
  display: none;
  bottom: 10px;
  ${props => {
    if (props.disabled) return `display: block;`;
    if (props.hover) return `transform: translate3d(0,-10px,0);`;
  }}
`;

const HandIcon = Icon.extend`
  display: none;
  bottom: 10px;
  transform-origin: bottom center;
  animation: ${rotateHand} .6s alternate infinite;
  ${props => {
    if (props.disabled) return `display: block;`;
  }}
`;

const DropzoneIcons = (props) => (
  <SVGcontainer>

    <StopIcon disabled={props.disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="48" viewBox="0 0 37 48">
        <g fill="none" fillRule="evenodd" strokeWidth="2" transform="translate(1 1)">
          <path stroke="#8F9DB2" d="M35 44.532V46H.9853v-1.9574H1V0h21l13 12.7234V44.532zM22 0v13h13" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="32" r="6" stroke="#EE5F55"/>
          <path stroke="#EE5F55" d="M22.5147 28L14 36.5147"/>
        </g>
      </svg>
    </StopIcon>

    <GifIcon hover={props.hover} disabled={props.disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="48" viewBox="0 0 37 48">
        <g fill="none" fillRule="evenodd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="#8F9DB2" d="M36 45.532V47H1.9853v-1.9574H2V1h21l13 12.7234V45.532zM23 1v13h13"/>
          <path stroke="#8BC34A" d="M15 38V26l11 6z"/>
        </g>
      </svg>
    </GifIcon>

    <ImageIcon hover={props.hover} disabled={props.disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="48" viewBox="0 0 37 48">
        <g fill="none" fillRule="evenodd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="#8F9DB2" d="M36 45.532V47H1.9853v-1.9574H2V1h21l13 12.7234V45.532zM23 1v13h13"/>
          <path stroke="#DD7FED" d="M8 39l6-6 3 2 6-7 7 11H8zm5-12c-1.1046 0-2-.8954-2-2s.8954-2 2-2 2 .8954 2 2-.8954 2-2 2z"/>
        </g>
      </svg>
    </ImageIcon>

    <SvgIcon hover={props.hover} disabled={props.disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="48" viewBox="0 0 37 48">
        <g fill="none" fillRule="evenodd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="#45B5F5" d="M23 25l6 6-6 6m-8 0l-6-6 6-6"/>
          <path stroke="#8F9DB2" d="M36 45.532V47H1.9853v-1.9574H2V1h21l13 12.7234V45.532zM23 1v13h13"/>
        </g>
      </svg>
    </SvgIcon>

  </SVGcontainer>
)

export default DropzoneIcons