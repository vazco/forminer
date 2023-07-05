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
import { HEADING_MD_STYLES } from '../../globalStyles/sharedStyles/headings';

const Offset = styled.div`
  ${media.greaterThan('xl')`
    margin-left: ${rem('66px')};
  `}
`;

const ButtonsWrapperOffset = styled.div`
  display: inline-flex;
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
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const StyledLargeText = styled.p`
  ${HEADING_MD_STYLES};
  font-weight: 300;
  max-width: 660px;

  &:last-child {
    margin-bottom: 0;
  }
  &:not(:last-child) {
    margin-bottom: ${rem('30px')};
    ${media.greaterThan('md')`
      margin-bottom: ${rem('50px')};
    `}
  }
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
  return (
    <FeaturedCase>
      <Offset>
        <h1>Forminer</h1>
        <StyledLargeText>
          <strong>Save up to 1500 hours</strong> while building form-heavy React
          apps with our easy to integrate package
        </StyledLargeText>
        <CustomBulletList>
          <CustomBulletListItem>
            <span>
              <strong>Powerful solution</strong> - custom fields, full state
              machine, conditional fields, schema-first approach, and many
              more...
            </span>
          </CustomBulletListItem>
          <CustomBulletListItem>
            <span>
              <strong>Traffic-independent payment</strong> - pick a one-time
              payment or subscription, not based on the number of users
            </span>
          </CustomBulletListItem>
          <CustomBulletListItem>
            <span>
              <strong>Good support</strong> - basing on our popular OpenSource
              package, uniforms, guarantees no vendor locking
            </span>
          </CustomBulletListItem>
        </CustomBulletList>
        <ButtonsWrapperOffset>
          <Button onClick={scrollToPricing}>Check pricing</Button>
          <Link to="/docs" internal>
            <Button variant="outlined">See technical documentation</Button>
          </Link>
        </ButtonsWrapperOffset>
      </Offset>
    </FeaturedCase>
  );
};
