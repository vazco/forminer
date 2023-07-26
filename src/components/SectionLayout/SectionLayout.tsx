import React, { ReactNode } from 'react';

import { Section } from './Section';
import { AccentHeading } from '../AccentHeading';
import { Container } from '../Container';

type SectionLayoutProps = {
  children: ReactNode;
  heading?: string;
  centerHeading?: boolean;
  alternativeBackground?: boolean;
  id?: string;
};

export const SectionLayout = ({
  children,
  heading,
  alternativeBackground = false,
  centerHeading = false,
  id,
}: SectionLayoutProps) => (
  <Section alternativeBackground={alternativeBackground} id={id}>
    <Container>
      {heading && <AccentHeading isStrong size="lg" center={centerHeading}>{heading}</AccentHeading>}
      {children}
    </Container>
  </Section>
);
