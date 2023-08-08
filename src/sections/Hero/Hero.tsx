import { useMediaQuery, useTheme } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars -- false positive error
import React, { MouseEvent } from 'react';

import { FeaturedCase } from './FeaturedCase';
import { Button } from '../../components/Button';
import {
  CustomBulletList,
  CustomBulletListItem,
} from '../../components/CustomBulletList';
import { Link } from '../../components/Link';
import { SupportedDesignLibraries } from '../SupportedDesignLibraries';

const scrollToPricing = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const pricingSection = document.getElementById('pricing');

  if (pricingSection) {
    pricingSection.scrollIntoView();
  }
};

export const Hero = () => {
  const theme = useTheme();
  const changeOrder = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <FeaturedCase>
      <h2 className="hero__main-title">
        Empower your users with{' '}
        <span className="hero__main-title--underlined">
          seamless form building
        </span>
      </h2>
      <CustomBulletList>
        <CustomBulletListItem>
          <span>
            Save up to <strong>1500 hours</strong> on development
          </span>
        </CustomBulletListItem>
        <CustomBulletListItem>
          <span>
            Enjoy the <strong>traffic-independent payment</strong> model
          </span>
        </CustomBulletListItem>
        <CustomBulletListItem>
          <span>
            Customize it or leverage{' '}
            <strong>already-prepped forms&apos; UI</strong>
          </span>
        </CustomBulletListItem>
      </CustomBulletList>
      {!changeOrder && (
        <>
          <h4 className="hero__supported-libraries-title">
            Supported design libraries:
          </h4>
          <SupportedDesignLibraries />
        </>
      )}
      <div className="hero__CTA-buttons-container">
        <Button
          className="btn-hero-check-pricing"
          variant="solid"
          onClick={scrollToPricing}
        >
          Check pricing
        </Button>
        <Link to="/docs" internal>
          <Button className="btn-hero-explore-docs" variant="outlined">
            Explore docs
          </Button>
        </Link>
      </div>
      {changeOrder && (
        <>
          <h4 className="hero__supported-libraries-title">
            Supported design libraries:
          </h4>
          <SupportedDesignLibraries />
        </>
      )}
    </FeaturedCase>
  );
};
