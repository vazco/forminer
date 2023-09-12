import React from 'react';

// eslint-disable-next-line no-unused-vars -- false positive error
import { PricingCard, PricingCardData } from '../../components/PricingCard';
import { SectionLayout } from '../../components/SectionLayout';
import CheckmarkIcon from '../../images/svg/checkmark.svg';
import DiamondIcon from '../../images/svg/diamond.svg';
import DollarIcon from '../../images/svg/dollar.svg';
import GiftIcon from '../../images/svg/gift.svg';
import StarIcon from '../../images/svg/star.svg';

const pricingCards: PricingCardData[] = [
  {
    color: '#818A96',
    title: 'Trial',
    price: 'Free',
    benefits: [
      {
        icon: <CheckmarkIcon />,
        text: 'Use it in PoC (Proof of Concept) to see how it fits your project.',
      },
      {
        icon: <CheckmarkIcon />,
        text: 'Once ready to use it in your operations, purchase and enjoy it on production.',
      },
    ],
    buttonText: 'Try it out',
    buttonLink:
      'https://transactions.sendowl.com/products/78972481/998CD884/view',
    btnClassName: 'btn-trial',
  },
  {
    color: '#00ABFF',
    title: 'Monthly',
    price: '$149',
    denominator: 'month',
    benefits: [
      {
        icon: <StarIcon />,
        text: 'All features included.',
        isButton: true,
        className: 'btn-all-features-monthly',
      },
    ],
    buttonText: 'Buy now',
    buttonLink:
      'https://transactions.sendowl.com/subscriptions/21901/AC6D4F49/view',
    isMostPopular: true,
    btnClassName: 'btn-buy-monthly',
  },
  {
    color: '#0092DB',
    title: 'Yearly',
    price: '$1490',
    denominator: 'year',
    benefits: [
      {
        icon: <StarIcon />,
        text: 'All features included.',
        isButton: true,
        className: 'btn-all-features-yearly',
      },
      {
        icon: <GiftIcon />,
        text: 'Two extra free months.',
        additionalStyles: {
          padding: 7,
        },
      },
    ],
    buttonText: 'Buy now',
    buttonLink:
      'https://transactions.sendowl.com/subscriptions/21900/D0E5583D/view',
    btnClassName: 'btn-buy-yearly',
  },
  {
    color: '#0070A8',
    title: 'Lifelong',
    price: '$4900',
    denominator: '∞',
    benefits: [
      {
        icon: <StarIcon />,
        text: 'All features included.',
        isButton: true,
        className: 'btn-all-features-lifelong',
      },
      {
        icon: <DollarIcon />,
        text: 'Pay once and enjoy it forever.',
        additionalStyles: {
          padding: 7,
        },
      },
    ],
    buttonText: 'Buy now',
    buttonLink:
      'https://transactions.sendowl.com/products/78872705/34727BAC/view',
    btnClassName: 'btn-buy-lifelong',
  },
  {
    color: '#C4BE14',
    title: 'Custom',
    benefits: [
      {
        icon: <DiamondIcon />,
        text: 'Multi-project licenses',
      },
      {
        icon: <DiamondIcon />,
        text: 'Custom extensions',
      },
      {
        icon: <DiamondIcon />,
        text: 'Training sessions & consultancy',
      },
    ],
    buttonText: 'Contact us',
    buttonLink: 'https://www.vazco.eu/contact-us',
    btnClassName: 'btn-buy-custom',
  },
];

export const Pricing = () => {
  return (
    <SectionLayout heading="Pricing" id="pricing" centerHeading>
      <div className="pricing__description">
        Interested in using Forminer? Find the plan that suits you best.
      </div>
      <div className="pricing__cards">
        {pricingCards.map(pricingCard => (
          <PricingCard key={pricingCard.title} {...pricingCard} />
        ))}
      </div>
    </SectionLayout>
  );
};
