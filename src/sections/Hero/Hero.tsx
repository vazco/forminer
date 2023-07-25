import { useMediaQuery, useTheme } from '@material-ui/core';
import { rem } from 'polished';
// eslint-disable-next-line no-unused-vars -- false positive error
import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { FeaturedCase } from './FeaturedCase';
import { Button } from '../../components/Button';
import {
  CustomBulletList,
  CustomBulletListItem,
} from '../../components/CustomBulletList';
import { Link } from '../../components/Link';
import media from '../../globalStyles/media';
import { SupportedDesignLibraries } from '../SupportedDesignLibraries';

const ButtonsWrapperOffset = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: ${rem('45px')};
  gap: ${rem('10px')} ${rem('15px')};

  ${media.between('md', 'lg')`
    gap: ${rem('10px')} ${rem('5px')}; 
`}

  ${media.between('lg', 'xl')`
    gap: ${rem('10px')} ${rem('12px')};
  `}

  ${media.lessThan('sm')`
    margin-top: ${rem('30px')};
    flex-direction: column;
  `}
`;

const TextUnderline = styled.span`
  text-decoration: underline;
  text-decoration-color: #EEEEE0;
  text-decoration-thickness: 6px;
  text-underline-offset: 3px;
`;

const StyledLargeText = styled.p`
  ${media.greaterThan('xl')`
    font-size: ${rem('30px')};
    line-height: ${rem('40px')};
  `}
  ${media.between('md', 'xl')`
    font-size: ${rem('23px')};
    line-height: ${rem('30px')};
  `}
  font-size: ${rem('20px')};
  line-height: ${rem('30px')};

  font-weight: 300;
  max-width: 660px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SupportedLibrariesTitle = styled.h4`
  ${media.between('xs', 'sm')`
    margin-top: ${rem('40px')};
  `}
  ${media.between('sm', 'md')`
    margin-top: ${rem('30px')};
  `}
  ${media.greaterThan('md')`
    margin-top: ${rem('40px')};
  `}
`;

const pricingSectionId = 'pricing';

const scrollToPricing = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const pricingSection = document.getElementById(pricingSectionId);

  if (pricingSection) {
    pricingSection.scrollIntoView();
  }
};

export const Hero = () => {
  const theme = useTheme();
  const changeOrder = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <FeaturedCase>
      <h2 style={{ fontWeight: 900 }}>
        Empower your users with <TextUnderline>seamless form building</TextUnderline>
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
            Customize it or leverage <strong>already-prepped forms' UI</strong>
          </span>
        </CustomBulletListItem>
      </CustomBulletList>
      {!changeOrder && (
        <>
          <SupportedLibrariesTitle>
            Supported design libraries:
          </SupportedLibrariesTitle>
          <SupportedDesignLibraries />
        </>
      )}
      <ButtonsWrapperOffset>
        <Button onClick={scrollToPricing} size="lg">
          Check pricing
        </Button>
        <Link to="/docs" internal>
          <Button variant="outlined" size="lg">
            Explore docs
          </Button>
        </Link>
      </ButtonsWrapperOffset>
      {changeOrder && (
        <>
          <SupportedLibrariesTitle>
            Supported design libraries:
          </SupportedLibrariesTitle>
          <SupportedDesignLibraries />
        </>
      )}
    </FeaturedCase>
  );
};
