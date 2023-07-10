import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars -- false positive error
import { UnifiedHeading, UnifiedHeadingProps } from './UnifiedHeading';
import media from '../../globalStyles/media';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  ${media.greaterThan('md')`
    margin-bottom: 35px;
  `}
`;

const StyledUnifiedHeading = styled(UnifiedHeading)`
  max-width: 660px;
  font-weight: 300;
`;

export const AccentHeading = ({
  children,
  level = 3,
  size = 'md',
  isStrong = true,
}: UnifiedHeadingProps) => {
  return (
    <Container>
      <StyledUnifiedHeading level={level} size={size} isStrong={isStrong}>
        {children}
      </StyledUnifiedHeading>
    </Container>
  );
};
