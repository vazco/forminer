import { useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Container } from '../../../components/Container';
import media from '../../../globalStyles/media';
// @ts-expect-error Image import
import image from '../../../images/forminer.webp';
// @ts-expect-error Image import
import background from '../../../images/cta-background.webp';

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

const StyledGridItem = styled(Grid)`
  && {
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 20px;
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
    padding-top: 16px;
    
  `}
    ${media.greaterThan('lg')`
    min-width: 1000px;
  `}
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

type FeaturedCaseProps = {
  children: ReactNode;
};

const direction = 'row-reverse';

export const FeaturedCase = ({ children }: FeaturedCaseProps) => {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up('md'));
  const changeOrder = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Section>
      <StyledContainer>
        <StyledGridContainer direction={direction} alignItems="start" container>
          {!changeOrder && (
            <Grid xs={12} sm={12} md={12} lg={6} item>
              <ContentWrapper reversed>{children}</ContentWrapper>
            </Grid>
          )}
          {showImage && (
            <StyledGridItem xs={12} sm={12} md={12} lg={6} item>
              <StyledImage
                src={image}
                alt="Forminer - Build form in React without any problems"
              />
            </StyledGridItem>
          )}

          {changeOrder && (
            <Grid xs={12} sm={12} md={12} lg={6} item>
              <ContentWrapper reversed>{children}</ContentWrapper>
            </Grid>
          )}
        </StyledGridContainer>
      </StyledContainer>
    </Section>
  );
};
