import { rem } from 'polished';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import media from '../../globalStyles/media';
import { HEADING_MD_STYLES } from '../../globalStyles/sharedStyles/headings';

const StyledLargeText = styled.p`
  ${HEADING_MD_STYLES};
  font-weight: 300;
  max-width: 660px;

  &:last-child {
    margin-bottom: 0;
  }
  &:not(:last-child) {
    margin-bottom: ${rem('30px')};
    ${media.greaterThan('md')`
      margin-bottom: ${rem('50px')};
    `}
  }
`;

type LargeTextProps = {
  children: ReactNode;
};

export const LargeText = ({ children }: LargeTextProps) => {
  return <StyledLargeText>{children}</StyledLargeText>;
};
