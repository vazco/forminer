import React, { ReactNode } from 'react';
import styled from 'styled-components';

import media from '../../globalStyles/media';

const AlternativeBackgroundContainer = styled.div`
  ${({ alternativeBackground, theme }) =>
    alternativeBackground &&
    `background-color: ${theme.color.grey}
  `}
`;

const StyledSection = styled(AlternativeBackgroundContainer)`
  position: relative;
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 60px;

  ${media.greaterThan('md')`
    padding-top: 75px;
    padding-bottom: 75px;
  `}
`;

type SectionProps = {
  children: ReactNode;
  alternativeBackground: boolean;
  id?: string;
};

export const Section = ({
  children,
  id,
  alternativeBackground,
}: SectionProps) => (
  <StyledSection
    id={id}
    alternativeBackground={alternativeBackground}
    as="section"
  >
    {children}
  </StyledSection>
);
