import clsx from 'clsx';
import React, { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  alternativeBackground: boolean;
  id?: string;
};

export const Section = ({
  children,
  id,
  alternativeBackground,
}: SectionProps) => (
  <section
    id={id}
    className={clsx('section-container', {
      'section-container__alternative-background': alternativeBackground,
    })}
  >
    {children}
  </section>
);
