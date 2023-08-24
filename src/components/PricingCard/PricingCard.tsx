import { Link } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

// @ts-expect-error png import
import customPricingIcon from '../../images/custom-pricing.webp';
import { scrollToSection } from '../../utils/scrollToSection';
import { Button } from '../Button';

type Benefit = {
  icon: JSX.Element;
  text: string;
  additionalStyles?: { [key: string]: string | number };
  isButton?: boolean;
  className?: string;
};

export type PricingCardData = {
  color: string;
  buttonText: string;
  buttonLink: string;
  title: string;
  price?: string;
  denominator?: string;
  isMostPopular?: boolean;
  benefits: Benefit[];
  btnClassName:
    | 'btn-trial'
    | 'btn-buy-monthly'
    | 'btn-buy-yearly'
    | 'btn-buy-lifelong'
    | 'btn-buy-custom';
};

type PricingCardProps = PricingCardData;

export const PricingCard = ({
  color,
  title,
  price,
  buttonText,
  benefits,
  denominator,
  isMostPopular,
  buttonLink,
  btnClassName,
}: PricingCardProps) => {
  const isBenefitsList = typeof benefits === 'string';

  return (
    <div
      className="pricing-card__card"
      style={{ border: `2px solid ${color}` }}
    >
      {isMostPopular && (
        <div className="pricing-card__badge" style={{ backgroundColor: color }}>
          Most popular
        </div>
      )}
      <div className="pricing-card__title">{title}</div>
      {price ? (
        <div className="pricing-card__price">
          {denominator ? (
            <>
              {price}
              <span className="pricing-card__denominator">/{denominator}</span>
            </>
          ) : (
            price
          )}
        </div>
      ) : (
        <div className="pricing-card__price">
          <div className="pricing-card__talk-icon">
            <img src={customPricingIcon} alt="custom pricing icon" />
          </div>
        </div>
      )}
      <div
        className="pricing-card__benefits"
        style={{ textAlign: isBenefitsList ? 'center' : 'left' }}
      >
        {isBenefitsList
          ? benefits
          : benefits.map(benefit => (
              <div
                key={benefit.text}
                style={benefit.additionalStyles}
                className={clsx(
                  benefit.className,
                  'pricing-card__bulletpoint-container',
                )}
              >
                <div
                  className="pricing-card__bulletpoint"
                  style={{ backgroundColor: color, color }}
                >
                  {benefit.icon}
                </div>
                {benefit.isButton ? (
                  <button
                    className="pricing-card__benefit-button"
                    onClick={event => scrollToSection(event, 'what-do-you-get')}
                  >
                    {benefit.text}
                  </button>
                ) : (
                  <div>{benefit.text}</div>
                )}
              </div>
            ))}
      </div>
      <Link className="pricing-card__link" href={buttonLink}>
        <Button
          className={btnClassName}
          variant="pricing"
          style={{ backgroundColor: color }}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};
