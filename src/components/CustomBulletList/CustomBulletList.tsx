import { rem } from 'polished';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Tick from '../../images/svg/tick-blue.svg';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: ${rem('24px')};
  &:last-child {
    margin: 0;
  }
`;

const StyledTick = styled(Tick)`
  content: '';
  position: absolute;
  left: 0;
  width: 36px;
  height: 36px;
`;

const ListItem = styled.li`
  position: relative;
  padding: 0 0 0 50px;
  min-height: 36px;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${rem('24px')};
  }

  span {
    display: inline-block;
    align-self: center;
    margin: 0;
  }
`;

type CustomBulletListProps = {
  children: ReactNode;
};

export const CustomBulletListItem = ({ children }: CustomBulletListProps) => (
  <ListItem>
    <StyledTick />
    {children}
  </ListItem>
);

export const CustomBulletList = ({ children }: CustomBulletListProps) => (
  <List>{children}</List>
);
