import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Link } from '../../components/Link';
import media from '../../globalStyles/media';

const HighlightPanel = styled.div`
  h3 {
    color: ${({ theme }) => theme.color.white};
    margin: 0;
    text-align: center;
    width: 100%;
    ${media.greaterThan('xl')`
      font-size: ${rem('40px')};
      line-height: ${rem('50px')};
    `}
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  ${media.greaterThan('xl')`
    padding: 75px 0;
  `}
  background-color: ${({ theme }) => theme.color.primary};
`;

const StyledHeading = styled.h3`
  margin-bottom: 24px !important;
`;

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
            <Button variant="outlined" reversed>
              {buttonText}
            </Button>
          </Link>
        </ContentWrapper>
      </Container>
    </HighlightPanel>
  );
};
