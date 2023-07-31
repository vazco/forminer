import { useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Lottie from 'lottie-react';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Container } from '../../../components/Container';
import media from '../../../globalStyles/media';
// @ts-expect-error Image import
import background from '../../../images/cta-background.webp';
import forminerHeadAnimation from '../../../lotties/forminer-head-animation.json';

const Section = styled.section`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  min-height: calc(100vh - 60px);
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
`;

const StyledContainer = styled(Container)`
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
  position: relative;
`;

const ContentWrapper = styled.div`
  padding-top: 60px;
  ${media.greaterThan('md')`
    padding: 0 24px 0 0;
  `}
`;

const StyledGridContainer = styled(Grid)`
  && {
    width: 100%;
    padding-bottom: 16px;
    ${media.greaterThan('md')`
      min-width: 700px;
      padding-top: 90px;
      display: flex;
      align-items: center;
    `}
    ${media.greaterThan('lg')`
      min-width: 1000px;
    `}
  }
`;

const AbsoluteImageContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
`;

type FeaturedCaseProps = {
  children: ReactNode;
};

const direction = 'row-reverse';

export const FeaturedCase = ({ children }: FeaturedCaseProps) => {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up('lg'));
  const showAbsoluteImage = useMediaQuery(
    '(min-width: 900px) and (max-width: 1023px)',
  );
  return (
    <Section>
      <StyledContainer>
        <StyledGridContainer direction={direction} alignItems="start" container>
          {showImage && (
            <Grid xs={12} sm={12} md={12} lg={6} item>
              <Lottie animationData={forminerHeadAnimation} loop />
            </Grid>
          )}
          <Grid xs={12} sm={12} md={12} lg={6} item>
            <ContentWrapper reversed>{children}</ContentWrapper>
          </Grid>
          {showAbsoluteImage && (
            <AbsoluteImageContainer>
              <Lottie animationData={forminerHeadAnimation} loop />
            </AbsoluteImageContainer>
          )}
        </StyledGridContainer>
      </StyledContainer>
    </Section>
  );
};
