import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0px 16px;
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
