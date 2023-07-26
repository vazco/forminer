import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import {
  HEADING_XL_STYLES,
  HEADING_LG_STYLES,
  HEADING_MD_STYLES,
} from '../../globalStyles/sharedStyles/headings';

const StyledHeading = styled.h2`
  font-weight: ${({ isStrong }) => (isStrong ? 700 : 300)};
  margin: 0;
  width: 100%;
  ${({ marginBottom }) =>
    marginBottom ? `margin-bottom: ${marginBottom}px` : 0};

  ${({ size }) => {
    switch (size) {
      case 'xl':
        return HEADING_XL_STYLES;

      case 'lg':
        return HEADING_LG_STYLES;

      case 'md':
        return HEADING_MD_STYLES;

      default:
        return css`
          font-size: inherit;
          line-height: inherit;
        `;
    }
  }}
`;

export type UnifiedHeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3;
  size?: 'md' | 'lg' | 'xl';
  isStrong?: boolean;
  marginBottom?: number;
  center?: boolean;
};

export const UnifiedHeading = ({
  children,
  level = 3,
  size = 'md',
  isStrong = true,
  marginBottom,
}: UnifiedHeadingProps) => {
  return (
    <StyledHeading
      isStrong={isStrong}
      as={`h${level}`}
      size={size}
      marginBottom={marginBottom}
    >
      {children}
    </StyledHeading>
  );
};
