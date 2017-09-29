import React from 'react';
import { StyledTitle } from './DropzoneTitle';

const StyledSubTitle = StyledTitle.extend`
  font-size: 12px;
  color: #5F6185;
`;

const DropzoneSubtitle = ({ children }) => (
  <StyledSubTitle>
    { children }
  </StyledSubTitle>
)

export default DropzoneSubtitle