import { rem } from 'polished';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { PriceTab } from './PriceTab';
import { UnifiedHeading } from '../../components/AccentHeading';
import { SectionLayout } from '../../components/SectionLayout';

const Wrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const TabPanelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  justify-content: center;
`;

const TabPanel = styled.div`
  font-size: ${rem('18px')};
  font-weight: ${({ current }) => (current ? 700 : 300)};
  padding: 10px 10px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  :after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 3px;
    left: 0;
    background-color: ${({ theme }) => theme.color.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  ${({ current }) =>
    current &&
    css`
      :after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    `}
`;

const Text = styled.p`
  margin: 0;
`;

const demoButtonData = {
  text: 'Get the free demo',
  to: '/demo',
  internal: true,
};

const tabs = ['One-time payment', 'Annual subscription', 'Custom solution'];
const tabsData = [
  {
    heading: '$4850',
    subHeading: 'Within this price, you receive:',
    listItems: [
      'A multi-tenant lifetime license for a single project',
      'Unlimited traffic',
      'Unlimited users',
      'Internal deployment',
      'Debugging support and free updates',
    ],
    buttons: [
      {
        text: 'Buy now',
        to: 'https://sowl.co/7jLwM',
      },
      { ...demoButtonData },
    ],
  },
  {
    heading: '$1350 / year',
    subHeading: 'Within this price, you receive:',
    listItems: [
      'A multi-tenant license for a single project',
      'Unlimited traffic',
      'Unlimited users',
      'Internal deployment',
      'Debugging support and free updates',
    ],
    buttons: [
      {
        text: 'Buy now',
        to: 'https://sowl.co/eEjpk',
      },
      { ...demoButtonData },
    ],
  },
  {
    heading: 'Price estimation based on your needs',
    subHeading: 'We also provide:',
    listItems: [
      'Multi-project licenses',
      'Custom extensions',
      'Training sessions',
      'Integrations',
    ],
    buttons: [
      {
        text: 'Describe your need',
        to: 'mailto:hello@forminer.com',
        newTab: false,
      },
      { ...demoButtonData },
    ],
    subtitle:
      'Contact us to estimate your project based on business requirements.',
  },
];

export const PricingSection = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <SectionLayout id="pricing">
      <Wrapper>
        <UnifiedHeading level={2} size="lg" marginBottom={24}>
          Pricing
        </UnifiedHeading>
        <Text>
          Interested in using Forminer? Find the plan that suits you best.
        </Text>
        <TabPanelsContainer>
          {tabs.map((tab, index) => (
            <TabPanel
              key={index}
              current={index === currentTabIndex}
              onClick={() => setCurrentTabIndex(index)}
            >
              {tab}
            </TabPanel>
          ))}
        </TabPanelsContainer>
        <PriceTab {...tabsData[currentTabIndex]} />
      </Wrapper>
    </SectionLayout>
  );
};
