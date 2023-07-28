import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Link } from '../../components/Link';
import media from '../../globalStyles/media';
import { BOX_BORDER_RADIUS } from '../../globalStyles/sharedStyles/box';
// @ts-expect-error Image import
import ctaBackground from '../../images/cta-background.webp';

const HighlightPanel = styled.div`
  h3 {
    color: ${({ theme }) => theme.color.black};
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
  ${media.lessThan('sm')`
    gap: ${rem('40px')};
    flex-direction: column;
  `}
`;

type CTASectionProps = {
  heading: string;
  buttonText: string;
  sectionId?: string;
  link: string;
};

export const CTASection = ({ heading, buttonText, link }: CTASectionProps) => {
  return (
    <HighlightPanel>
      <Container>
        <ContentWrapper>
          <h3>{heading}</h3>
          <Link to={link} newTab={false} internal>
            <Button variant="solid">{buttonText}</Button>
          </Link>
        </ContentWrapper>
      </Container>
    </HighlightPanel>
  );
};
