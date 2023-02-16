import { default as DocusaurusLink } from '@docusaurus/Link';
import React, { ReactNode } from 'react';

type LinkProps = {
  to: string;
  children: ReactNode;
  internal?: boolean;
  scroll?: boolean;
  newTab?: boolean;
};

export const Link = ({
  to,
  children,
  internal = false,
  scroll = false,
  newTab = true,
}: LinkProps) => {
  if (internal) {
    return <DocusaurusLink to={to}>{children}</DocusaurusLink>;
  }

  if (scroll) {
    return <a href={`#${to}`}>{children}</a>;
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
