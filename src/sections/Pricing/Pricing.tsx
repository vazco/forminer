import React from 'react';
import styled from 'styled-components';

import { PricingCard } from '../../components/PricingCard';
import { SectionLayout } from '../../components/SectionLayout';
import media from '../../globalStyles/media';

const PricingWrapperComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  ${media.lessThan('xl')`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}
  ${media.lessThan('lg')`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}
  ${media.lessThan('md')`
    grid-template-columns: 1fr;
    gap: 20px;
  `}
  gap: 10px;
`;

const DescriptionComponent = styled.div`
  font-size: 28px;
  text-align: center;
  margin-bottom: 32px;
`;

type PricingCard = {
  color: string;
  title: string;
  price?: string;
  denominator?: string;
  benefits: string[];
  buttonText: string;
  buttonLink: string;
  isMostPopular?: boolean;
  btnClassName: string;
};

const pricingCards: PricingCard[] = [
  {
    color: '#818A96',
    title: 'Trial',
    price: 'Free',
    benefits: [
      'Use it in PoC (Proof of Concept) to see how it fits your project.',
      'Once ready to use it in your operations, purchase and enjoy it on production.',
    ],
    buttonText: 'Try it out',
    buttonLink:
      'https://transactions.sendowl.com/products/78972481/998CD884/view',
    btnClassName: 'btn-trial',
  },
  {
    color: '#DBDB40',
    title: 'Monthly',
    price: '$149',
    denominator: 'month',
    benefits: ["Forminer's complete package 💪"],
    buttonText: 'Buy now',
    buttonLink:
      'https://transactions.sendowl.com/subscriptions/21901/AC6D4F49/view',
    isMostPopular: true,
    btnClassName: 'btn-buy-monthly',
  },
  {
    color: '#00ABFF',
    title: 'Yearly',
    price: '$1490',
    denominator: 'year',
    benefits: ["Forminer's complete package 💪"],
    buttonText: 'Buy now',
    buttonLink:
      'https://transactions.sendowl.com/subscriptions/21900/D0E5583D/view',
    btnClassName: 'btn-buy-yearly',
  },
  {
    color: '#004AAD',
    title: 'Lifelong',
    price: '$4900',
    denominator: '∞',
    benefits: ["Forminer's complete package 💪"],
    buttonText: 'Buy now',
    buttonLink:
      'https://transactions.sendowl.com/products/78872705/34727BAC/view',
    btnClassName: 'btn-buy-lifelong',
  },
  {
    color: '#00141E',
    title: 'Custom',
    benefits: [
      'Multi-project licenses',
      'Custom extensions',
      'Training sessions & consultancy',
    ],
    buttonText: 'Contact us',
    buttonLink: 'https://www.vazco.eu/contact-us',
    btnClassName: 'btn-buy-custom',
  },
];

export const Pricing = () => {
  return (
    <SectionLayout heading="Pricing" id="pricing" centerHeading>
      <DescriptionComponent>
        Interested in using Forminer? Find the plan that suits you best.
      </DescriptionComponent>
      <PricingWrapperComponent>
        {pricingCards.map(pricingCard => (
          <PricingCard key={pricingCard.title} {...pricingCard} />
        ))}
      </PricingWrapperComponent>
    </SectionLayout>
  );
};
