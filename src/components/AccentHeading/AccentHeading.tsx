import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars -- false positive error
import { UnifiedHeading, UnifiedHeadingProps } from './UnifiedHeading';
import media from '../../globalStyles/media';

const StyledUnifiedHeading = styled(UnifiedHeading)`
  max-width: 660px;
  font-weight: 300;
`;

export const AccentHeading = ({
  children,
  level = 3,
  size = 'md',
  isStrong = true,
  center = false,
}: UnifiedHeadingProps) => {
  const Container = styled.div`
    display: flex;
    align-items: flex-start;
    text-align: ${center ? 'center' : 'initial'};
    margin-bottom: 24px;
    ${media.greaterThan('md')`
      margin-bottom: 35px;
    `}
  `;

  return (
    <Container>
      <StyledUnifiedHeading level={level} size={size} isStrong={isStrong}>
        {children}
      </StyledUnifiedHeading>
    </Container>
  );
};
