import { default as DocusaurusLink } from '@docusaurus/Link';
import React, { ReactNode } from 'react';

export type LinkProps = {
  to: string;
  children: ReactNode;
  internal?: boolean;
  newTab?: boolean;
};

export const Link = ({
  to,
  children,
  internal = false,
  newTab = true,
}: LinkProps) => {
  if (internal) {
    return <DocusaurusLink to={to}>{children}</DocusaurusLink>;
  }

  return (
    <a
      href={to}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
    >
      {children}
    </a>
  );
};
