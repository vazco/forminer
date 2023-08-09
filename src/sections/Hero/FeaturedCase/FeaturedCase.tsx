import { useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Lottie from 'lottie-react';
import React, { ReactNode } from 'react';

import { Container } from '../../../components/Container';
// @ts-expect-error Image import
import background from '../../../images/cta-background.webp';
import forminerHeadAnimation from '../../../lotties/forminer-head-animation.json';

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
    <section
      className="featured-case__section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container className="featured-case__container">
        <Grid
          className="featured-case__grid-container"
          direction={direction}
          container
        >
          {showImage && (
            <Grid xs={12} sm={12} md={12} lg={6} item>
              <Lottie animationData={forminerHeadAnimation} loop />
            </Grid>
          )}
          <Grid xs={12} sm={12} md={12} lg={6} item>
            <div className="featured-case__content-wrapper">{children}</div>
          </Grid>
          {showAbsoluteImage && (
            <div className="featured-case__image-container__absolute">
              <Lottie animationData={forminerHeadAnimation} loop />
            </div>
          )}
        </Grid>
      </Container>
    </section>
  );
};
