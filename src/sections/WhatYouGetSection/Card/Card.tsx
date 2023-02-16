import Grid from '@material-ui/core/Grid';
import { rem } from 'polished';
// eslint-disable-next-line no-unused-vars
import React, { ReactNode, ComponentType, SVGProps } from 'react';
import styled, { css } from 'styled-components';

import media from '../../../globalStyles/media';
import { BOX_COMMON_STYLES } from '../../../globalStyles/sharedStyles/box';
import AgreementIcon from '../../../images/svg/agreement.svg';
import OpportunitiesIcon from '../../../images/svg/opportunities.svg';
import TechtalksIcon from '../../../images/svg/techtalks.svg';

const StyledGridItem = styled(Grid)`
  &:not(:last-child) {
    margin-bottom: ${rem('40px')};
  }
  ${media.greaterThan('md')`
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImgWrap = styled.div`
  ${({ type }) =>
    type === 'icon'
      ? css`
          display: flex;
          align-items: center;
          min-height: 50px;
        `
      : BOX_COMMON_STYLES}

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `};

  margin: 0 0 24px;
  max-width: 735px;
  max-height: 612px;
  img {
    display: block;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  div > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
  > a {
    color: inherit;
    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const CardContentHeading = styled.h3`
  margin-bottom: 8px;
`;

type Icon = 'ageement' | 'opportunities' | 'techtalk';

const iconMap: Record<Icon, ComponentType<SVGProps<SVGSVGElement>>> = {
  ageement: AgreementIcon,
  opportunities: OpportunitiesIcon,
  techtalk: TechtalksIcon,
};

type CardProps = {
  numOfItems: number;
  icon: Icon;
  children: ReactNode;
  heading: string;
};

export const Card = ({ numOfItems, icon, children, heading }: CardProps) => {
  const IconSvg = iconMap[icon];
  return (
    <StyledGridItem
      xs={12}
      {...(numOfItems % 2 === 0 && { sm: 6 })}
      md={4}
      {...(numOfItems % 4 === 0 && { lg: 3 })}
      item
    >
      <CardWrapper>
        <ImgWrap type="icon">
          <IconSvg />
        </ImgWrap>

        <CardContent>
          <CardContentHeading>{heading}</CardContentHeading>
          <div>
            <p>{children}</p>
          </div>
        </CardContent>
      </CardWrapper>
    </StyledGridItem>
  );
};
