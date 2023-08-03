import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Link } from '../../components/Link';
import media from '../../globalStyles/media';
// @ts-expect-error Image import
import ctaBackground from '../../images/cta-background.webp';

const HighlightPanel = styled.div`
  padding: 100px 0px !important;
  h3 {
    color: ${({ theme }) => theme.color.black};
    margin: 0;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 40px;
  gap: ${rem('60px')};
  border-radius: 8px;
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
  btnClassName: string;
};

export const CTASection = ({
  heading,
  buttonText,
  link,
  btnClassName,
}: CTASectionProps) => {
  return (
    <HighlightPanel>
      <Container>
        <ContentWrapper>
          <h2 style={{ margin: '0px' }}>{heading}</h2>
          <Link to={link} newTab={false} internal>
            <Button className={btnClassName} variant="solid">
              {buttonText}
            </Button>
          </Link>
        </ContentWrapper>
      </Container>
    </HighlightPanel>
  );
};
