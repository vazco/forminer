import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { FeaturedCase } from './FeaturedCase';
import { Button } from '../../components/Button';
import {
  CustomBulletList,
  CustomBulletListItem,
} from '../../components/CustomBulletList';
import { LargeText } from '../../components/LargeText';
import { Link } from '../../components/Link';
import media from '../../globalStyles/media';

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

const buttons = [
  // TODO: Scroll to ID
  {
    _key: '685f7101f363',
    buttonText: 'Check pricing',
    isSolid: true,
    url: 'pricing',
    scroll: true,
  },
  {
    _key: '056c33371864',
    buttonText: 'See technical documentation',
    url: '/docs',
    internal: true,
  },
];

export const Hero = () => {
  return (
    <div>
      <FeaturedCase>
        <Offset>
          <h1>Forminer</h1>
          <LargeText>
            <strong>Save up to 1500 hours</strong> while building form-heavy
            React apps with our easy to integrate package
          </LargeText>
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
          {buttons?.length > 0 && (
            <ButtonsWrapperOffset>
              {buttons.map(
                ({ _key, url, isSolid, buttonText, internal, scroll }) => (
                  <Link key={_key} to={url} internal={internal} scroll={scroll}>
                    <Button variant={isSolid ? 'solid' : 'outlined'}>
                      {buttonText}
                    </Button>
                  </Link>
                ),
              )}
            </ButtonsWrapperOffset>
          )}
        </Offset>
      </FeaturedCase>
    </div>
  );
};
