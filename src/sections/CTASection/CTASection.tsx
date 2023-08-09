import React from 'react';

import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Link } from '../../components/Link';
// @ts-expect-error Image import
import ctaBackground from '../../images/cta-background.webp';

type CTASectionProps = {
  heading: string;
  buttonText: string;
  sectionId?: string;
  link: string;
  btnClassName: string;
};

export const CTASection = ({
  heading,
  buttonText,
  link,
  btnClassName,
}: CTASectionProps) => {
  return (
    <div className="cta-section__highlight-panel">
      <Container>
        <div
          className="cta-section__content-wrapper"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        >
          <h2 className="cta-section__heading">{heading}</h2>
          <Link to={link} newTab={false} internal>
            <Button className={btnClassName} variant="solid">
              {buttonText}
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
