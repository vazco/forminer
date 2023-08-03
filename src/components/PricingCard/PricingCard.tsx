import { Link } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

// @ts-expect-error png import
import customPricingIcon from '../../images/custom-pricing.webp';
import { scrollToSection } from '../../utils/scrollToSection';
import { Button } from '../Button';

type Benefit = {
  icon: JSX.Element;
  text: string;
  additionalStyles?: { [key: string]: string | number };
  isButton?: boolean;
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

const TitleComponent = styled.div`
  font-weight: 900;
  font-size: 28px;
  margin: 10px 0px;
`;

const PriceComponent = styled.div`
  font-size: 28px;
  margin: 10px 0px;
`;

const TalkIconComponent = styled.div`
  width: 45px;
  height: 45px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const DenominatorComponent = styled.span`
  font-size: 14px;
  font-weight: 100;
  vertical-align: super;
  letter-spacing: 0.5px;
  margin-left: 2px;
`;

const BulletpointWrapComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LinkComponent = styled(Link)`
  display: flex;
  justify-content: center;
  &:hover {
    text-decoration: none !important;
  }
`;

const CardComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ color }) => color};
  border-radius: 36px;
  width: 100%;
  padding: 20px;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.03);
  }
`;

const BadgeComponent = styled.div`
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  font-size: 14px;
  padding: 8px 32px;
  border-radius: 32px;
  font-weight: 500;
  background-color: ${({ color }) => color};
  white-space: nowrap;
  color: white;
`;

const BenefitsComponent = styled.div`
  text-align: ${({ isBenefitsList }) => (isBenefitsList ? 'center' : 'left')};
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  gap: 10px;
  justify-content: center;
  padding: 15px 0px;
  margin-bottom: 15px;
`;

const BulletPointComponent = styled.div`
  background-color: ${({ color }) => color};
  color: ${({ color }) => color};
  border-radius: 32px;
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 75%;
    height: 75%;
  }
`;

const BenefitButton = styled.button`
  transition: font-weight 0.2s ease-in-out;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  &:hover {
    font-weight: 600;
  }
`;

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
    <CardComponent color={color}>
      {isMostPopular && (
        <BadgeComponent color={color}>Most popular</BadgeComponent>
      )}
      <TitleComponent>{title}</TitleComponent>
      {price ? (
        <PriceComponent>
          {denominator ? (
            <>
              {price}
              <DenominatorComponent>/{denominator}</DenominatorComponent>
            </>
          ) : (
            price
          )}
        </PriceComponent>
      ) : (
        <PriceComponent>
          <TalkIconComponent>
            <img src={customPricingIcon} alt="custom pricing icon" />
          </TalkIconComponent>
        </PriceComponent>
      )}
      <BenefitsComponent isBenefitsList={isBenefitsList}>
        {isBenefitsList
          ? benefits
          : benefits.map(benefit => (
              <BulletpointWrapComponent
                key={benefit.text}
                style={benefit.additionalStyles}
              >
                <BulletPointComponent color={color}>
                  {benefit.icon}
                </BulletPointComponent>
                {benefit.isButton ? (
                  <BenefitButton
                    onClick={event => scrollToSection(event, 'what-do-you-get')}
                  >
                    {benefit.text}
                  </BenefitButton>
                ) : (
                  <div>{benefit.text}</div>
                )}
              </BulletpointWrapComponent>
            ))}
      </BenefitsComponent>
      <LinkComponent href={buttonLink}>
        <Button
          className={btnClassName}
          variant="pricing"
          style={{ backgroundColor: color }}
        >
          {buttonText}
        </Button>
      </LinkComponent>
    </CardComponent>
  );
};
