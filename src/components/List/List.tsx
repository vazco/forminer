import { rem } from 'polished';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${rem('8px')};
  }
`;

const StyledList = styled.ul`
  padding-left: 50px;
`;

type ListProps = {
  children: ReactNode;
};

export const ListItem = ({ children }: ListProps) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export const List = ({ children }: ListProps) => {
  return <StyledList>{children}</StyledList>;
};
