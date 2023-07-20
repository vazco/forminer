import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';
import media from '../../globalStyles/media';

import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Link } from '../../components/Link';
import { BOX_BORDER_RADIUS } from '../../globalStyles/sharedStyles/box';
// @ts-expect-error Image import
import ctaBackground from '../../images/cta-background.webp';

const HighlightPanel = styled.div`
  h3 {
    color: black;
    margin: 0;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem('100px')};
  padding: 40px;
  ${BOX_BORDER_RADIUS};
  background-image: url(${ctaBackground});
  background-size: cover;
  background-position: center center;
  ${media.lessThan("sm")`
    gap: ${rem('40px')};
    flex-direction: column;
  `}
`;

const StyledHeading = styled.h3``;

type CTASectionProps = {
  heading: string;
  buttonText: string;
  sectionId?: string;
};

export const CTASection = ({ heading, buttonText }: CTASectionProps) => {
  return (
    <HighlightPanel>
      <Container>
        <ContentWrapper>
          <StyledHeading>{heading}</StyledHeading>
          <Link to="mailto:hello@forminer.com" newTab={false}>
            <Button variant="solid">{buttonText}</Button>
          </Link>
        </ContentWrapper>
      </Container>
    </HighlightPanel>
  );
};
