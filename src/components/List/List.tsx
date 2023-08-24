import React, { ReactNode } from 'react';

type ListProps = {
  children: ReactNode;
};

export const ListItem = ({ children }: ListProps) => {
  return <li className="list__item">{children}</li>;
};

export const List = ({ children }: ListProps) => {
  return <ul className="list__with-padding">{children}</ul>;
};
