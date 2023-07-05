import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars -- false positive error
import { UnifiedHeading, UnifiedHeadingProps } from './UnifiedHeading';
import media from '../../globalStyles/media';
import LogoTriangle from '../../images/svg/vazco-logo-triangle.inline.svg';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  ${media.greaterThan('md')`
    margin-bottom: 35px;
  `}
`;

const StyledTringle = styled(LogoTriangle)`
  display: inline-block;
  margin-top: 4px;
  margin-right: 5px;
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
      <StyledTringle />
      <StyledUnifiedHeading level={level} size={size} isStrong={isStrong}>
        {children}
      </StyledUnifiedHeading>
    </Container>
  );
};
