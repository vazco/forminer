// eslint-disable-next-line no-unused-vars -- false positive error
import React, { MouseEvent } from 'react';

export const scrollToSection = (
  event: MouseEvent<HTMLButtonElement>,
  sectionId: string,
) => {
  event.preventDefault();
  const pricingSection = document.getElementById(sectionId);

  if (pricingSection) {
    pricingSection.scrollIntoView();
  }
};
