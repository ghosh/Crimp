import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledSummary = styled.div`
	display: flex;
	align-items: center;
	height: 60px;
`;

const Tick = styled.svg`
	width: 20px;
	height: 20px;
	fill: #72b12a;
	margin: 0 10px;
`;

const Summary = styled.h1`
	font-weight: bold;
	margin-right: 10px;
	color: #4C4D6C;
	font-size: 17px;
`;

const Delta = styled.p`
	color: #72b12a;
	font-size: 13px;
`;

const ReportSummary = ({deltaBytes, deltaPerct}) => (
  <StyledSummary>
		<Tick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 88">
		  <path d="M44.556.157c-24.2 0-43.8 19.6-43.8 43.8 0 24.2 19.6 43.8 43.8 43.8 24.2 0 43.8-19.6 43.8-43.8 0-24.2-19.6-43.8-43.8-43.8zm16 29.7c4.1-.1 6.2 4.9 3.3 7.8l-21.2 21.2c-1.3 1.3-3.5 1.3-4.8 0l-10.7-10.9c-4.4-4.3 2.1-10.8 6.4-6.4l6 6c.4.4 1.2.4 1.6 0l16.4-16.4c.7-.8 1.8-1.3 3-1.3z"/>
		</Tick>
		<Summary>
			{deltaBytes} saved
		</Summary>
		<Delta>
			▼ {deltaPerct}%
		</Delta>
  </StyledSummary>
)

export default ReportSummary;