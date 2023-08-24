import React, { ReactNode } from 'react';

import CheckmarkIcon from '../../images/svg/checkmark.svg';

type CustomBulletListProps = {
  children: ReactNode;
};

type CustomBulletListItemProps = {
  children: ReactNode;
};

export const CustomBulletListItem = ({
  children,
}: CustomBulletListItemProps) => (
  <li className="custom-bullet-list__item">
    <div className="custom-bullet-list__checkmark">
      <CheckmarkIcon />
    </div>
    {children}
  </li>
);

export const CustomBulletList = ({ children }: CustomBulletListProps) => (
  <ul className="custom-bullet-list__list">{children}</ul>
);
