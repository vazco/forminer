import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { BOX_BORDER_RADIUS } from './../../../globalStyles/sharedStyles/box';
import { Button } from '../../../components/Button';
import {
  CustomBulletList,
  CustomBulletListItem,
} from '../../../components/CustomBulletList';
import { Link, LinkProps } from '../../../components/Link';
import media from '../../../globalStyles/media';

const TabWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
  ${BOX_BORDER_RADIUS};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionBox = styled.div`
  display: inline-flex;

  flex-direction: column;
  ${media.greaterThan('md')`
    flex-direction: row;
  `}

  margin-top: ${rem('20px')};
  gap: ${rem('20px')} ${rem('40px')};
`;

const ContentHeading = styled.h3`
  margin-bottom: 16px;
`;

const ContentWrapper = styled.div`
  margin: 5px 0;
`;

const SubHeading = styled.p`
  text-align: center;
`;

type Button = Omit<LinkProps, 'children'> & {
  text: string;
};

type PriceTabProps = {
  heading: string;
  subHeading: string;
  listItems: string[];
  buttons: Button[];
  subtitle?: string;
};

export const PriceTab = ({
  heading,
  subHeading,
  listItems,
  buttons,
  subtitle,
}: PriceTabProps) => {
  return (
    <TabWrapper>
      <Content>
        <ContentHeading>{heading}</ContentHeading>
        <ContentWrapper>
          <SubHeading>{subHeading}</SubHeading>
          <CustomBulletList>
            {listItems.map(item => (
              <CustomBulletListItem key={item}>{item}</CustomBulletListItem>
            ))}
          </CustomBulletList>
          {subtitle && <p>{subtitle}</p>}
        </ContentWrapper>
      </Content>
      <ActionBox>
        {buttons.map(({ text, ...rest }, index) => (
          <Link key={rest.to} {...rest}>
            <Button variant={index === 0 ? 'solid' : 'outlined'}>{text}</Button>
          </Link>
        ))}
      </ActionBox>
    </TabWrapper>
  );
};
