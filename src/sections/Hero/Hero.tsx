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
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${rem('45px')};
  gap: ${rem('10px')} ${rem('15px')};

  ${media.between('md', 'lg')`
    gap: ${rem('10px')} ${rem('5px')}; 
`}

  ${media.between('lg', 'xl')`
    gap: ${rem('10px')} ${rem('12px')};
  `}

  ${media.lessThan('md')`
    margin-top: ${rem('30px')};
    flex-direction: column;
  `}
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
  color: white;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SupportedLibrariesTitle = styled.h4`
  color: white;
  ${media.between('xs', 'sm')`
  margin-top: ${rem('40px')};
`}
  ${media.between('sm', 'md')`
    margin-top: ${rem('30px')};
  `}
  ${media.greaterThan('md')`
    margin-top: ${rem('40px')};
  `}
  ${media.between('xs', 'lg')`
    text-align: center;
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
      <h1 style={{ color: 'white' }}>Forminer</h1>
      <StyledLargeText>
        <strong>Save up to 1500 hours</strong> while building form-heavy React
        apps with our easy to integrate package
      </StyledLargeText>
      <CustomBulletList>
        <CustomBulletListItem theme="white">
          <span>
            <strong>Powerful solution</strong> - custom fields, full state
            machine, conditional fields, schema-first approach, and many more...
          </span>
        </CustomBulletListItem>
        <CustomBulletListItem theme="white">
          <span>
            <strong>Traffic-independent payment</strong> - pick a one-time
            payment or subscription, not based on the number of users
          </span>
        </CustomBulletListItem>
        <CustomBulletListItem theme="white">
          <span>
            <strong>Good support</strong> - basing on our popular OpenSource
            package, uniforms, guarantees no vendor locking
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
          <Button variant="outlined" size="lg" reversed>
            See technical documentation
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
