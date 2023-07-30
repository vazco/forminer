import { Link } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import CheckmarkIcon from '../../images/svg/checkmark.svg';
import TalkIcon from '../../images/svg/talk.svg';
import { Button } from '../Button';

type PricingCardProps = {
  color: string;
  buttonText: string;
  buttonLink: string;
  title: string;
  price?: string;
  denominator?: string;
  isMostPopular?: boolean;
  benefits: string[] | string;
  btnClassName: string;
};

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
  padding: 24px;
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
  gap: 15px;
  justify-content: center;
  padding: 15px 0px;
  margin-bottom: 15px;
`;

const BulletPointComponent = styled.div`
  color: ${({ color }) => color};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  & svg {
    width: 100%;
    height: 100%;
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
            <TalkIcon />
          </TalkIconComponent>
        </PriceComponent>
      )}
      <BenefitsComponent isBenefitsList={isBenefitsList}>
        {isBenefitsList
          ? benefits
          : benefits.map(benefit => (
              <BulletpointWrapComponent key={benefit}>
                <BulletPointComponent color={color}>
                  <CheckmarkIcon />
                </BulletPointComponent>
                <div>{benefit}</div>
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
