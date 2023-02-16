import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

type HighlightProps = {
  children: ReactNode;
};

export const Highlight = ({ children }: HighlightProps) => {
  if (!children) {
    return null;
  }

  return <StyledSpan>{children}</StyledSpan>;
};
