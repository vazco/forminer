import { rem } from 'polished';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import media from '../../globalStyles/media';
import CheckmarkIcon from '../../images/svg/checkmark.svg';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: ${rem('24px')};
  &:last-child {
    margin: 0;
  }
`;

const CheckmarkWrapper = styled.div`
  color: ${({ color = 'black' }) => color};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 20px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const ListItem = styled.li`
  position: relative;
  min-height: 36px;
  display: flex;
  align-items: center;
  color: ${(props: CustomBulletListItemProps) =>
    props.theme === 'white' ? 'white' : 'inherit'};

  ${media.lessThan('sm')`
    margin-bottom: ${rem('12px')};
  `}
  ${media.lessThan('xl')`
    margin-bottom: ${rem('18px')};
  `}
  margin-bottom: ${rem('24px')};

  span {
    display: inline-block;
    align-self: center;
    margin: 0;
  }
`;

type CustomBulletListProps = {
  children: ReactNode;
};

type CustomBulletListItemProps = {
  children: ReactNode;
  theme: 'blue' | 'white' | 'black';
};

export const CustomBulletListItem = ({
  children,
  theme,
}: CustomBulletListItemProps) => (
  <ListItem theme={theme}>
    <CheckmarkWrapper color={theme}>
      <CheckmarkIcon />
    </CheckmarkWrapper>
    {children}
  </ListItem>
);

export const CustomBulletList = ({ children }: CustomBulletListProps) => (
  <List>{children}</List>
);
