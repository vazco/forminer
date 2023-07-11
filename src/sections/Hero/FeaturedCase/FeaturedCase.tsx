import { useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Container } from '../../../components/Container';
import media from '../../../globalStyles/media';
import { BOX_COMMON_STYLES } from '../../../globalStyles/sharedStyles/box';
// @ts-expect-error Image import
import image from '../../../images/forminer.webp';

const Section = styled.section`
  padding: ${({ isFramed }) => (isFramed ? '16px' : '16px 16px 80px 16px')};
  display: flex;
  align-items: center;
  ${media.lessThan('sm')`
    padding-top: 0;
  `};
  ${media.greaterThan('md')`
    ${({ isFramed }) =>
      !isFramed &&
      css`
        padding-bottom: 32px;
      `}
  `} ${({ bgColor, isFramed }) =>
    bgColor &&
    !isFramed &&
    css`
      background-color: ${bgColor};
    `};
`;

const StyledContainer = styled(Container)`
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
  position: relative;

  ${({ isFramed, bgColor }) =>
    isFramed &&
    css`
      ${BOX_COMMON_STYLES};
      background-color: ${bgColor};
    `}
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
    padding: ${({ reversed }) => (reversed ? '0 24px 0 0' : '0 0 0 24px')};
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

const bgColor = '#0d5dbf';
const direction = 'row-reverse';

export const FeaturedCase = ({ children }: FeaturedCaseProps) => {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up('md'));
  const changeOrder = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Section bgColor={bgColor} isFramed={false}>
      <StyledContainer bgColor={bgColor} isFramed={false}>
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
