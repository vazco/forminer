import React, { ReactNode } from 'react';
import styled from 'styled-components';

import media from '../../globalStyles/media';

const StyledContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  ${media.lessThan('xl')`
    padding-left: 16px;
    padding-right: 16px;
  `}
`;

type ContainerProps = {
  children: ReactNode;
  className?: string;
  wide?: boolean;
  id?: string;
};

export const Container = ({
  children,
  id,
  className,
  wide = false,
}: ContainerProps) => {
  return (
    <StyledContainer id={id} className={className} wide={wide}>
      {children}
    </StyledContainer>
  );
};
