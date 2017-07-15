import React from 'react';
import { StyledTitle } from './DropzoneTitle';

const StyledSubTitle = StyledTitle.extend`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
`;

const DropzoneSubtitle = ({ children }) => (
  <StyledSubTitle>
    { children }
  </StyledSubTitle>
)

export default DropzoneSubtitle